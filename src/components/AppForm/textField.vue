<template>
  <div class="flex w-full flex-col relative">
    <div
      class="w-full flex flex-row items-center"
      :tabindex="tabIndex"
      @focus="isFocused = true"
      @blur="isFocused = false"
    >
      <!--
        @slot outer-prefix
        Use this slot to add content before the input field container.
      -->
      <slot name="outer-prefix" />
      <label
        class="absolute left-4 px-1 text-base top-[19px] bg-white transition-all duration-300"
        :class="{
          '!top-[-14px] text-[#999999] font-medium':
            isFocused || placeholder || content,
          'text-red': errorMessage,
          'text-green': successMessage && !errorMessage,
        }"
        >{{ label }}</label
      >
      <div
        class="flew-grow w-full [box-shadow:0_0_0_1.5px_#E0E2E4] text-base space-x-1 flex-row flex items-center justify-between px-5 py-5 bg-white rounded-[12px]"
        :class="{
          '[box-shadow:0_0_0_2px_#999999]': isFocused && !errorMessage && !successMessage,
          '[box-shadow:0_0_0_2px_theme(colors.red)]': errorMessage,
          '[box-shadow:0_0_0_2px_theme(colors.green)]': successMessage && !errorMessage,
          customClass,
        }"
      >
        <!--
          @slot inner-prefix
          Use this slot to add content before the input field.
        -->
        <slot name="inner-prefix" />
        <input
          v-model="content"
          :placeholder="placeholder"
          @focus="isFocused = true"
          @blur="
            isFocused = false;
            checkValidation();
          "
          @keypress="isNumber"
          :disabled="disabled"
          :type="fieldType"
          :class="` text-black grow bg-transparent placeholder-gray-400 focus input w-full focus:outline-hidden  `"
        />
        <!--
          @slot inner-suffix
          Use this slot to add content after the input field.
        -->
        <slot name="inner-suffix" />
        <app-icon
          :name="`${fieldType == 'password' ? 'show' : 'hide'}`"
          :customClass="`${fieldType == 'password' ? 'h-[12px]' : 'h-[14px]'}`"
          v-if="type == 'password'"
          @click.stop="
            fieldType == 'password'
              ? (fieldType = 'text')
              : (fieldType = 'password')
          "
        />
      </div>
      <!--
        @slot outer-suffix
        Use this slot to add content after the input field container.
      -->
      <slot name="outer-suffix" />
    </div>
    <div
      v-if="errorMessage || successMessage"
      class="w-full flex flex-row pt-1 justify-start items-center gap-1"
    >
      <img 
        v-if="errorMessage"
        src="@/assets/svg/All/linear/info-circle.svg" 
        class="w-4 h-4"
      />
      <img 
        v-if="successMessage && !errorMessage"
        src="@/assets/svg/All/linear/tick-circle.svg" 
        class="w-4 h-4"
      />
      <app-normal-text 
        :customClass="'text-left'" 
        :color="errorMessage ? 'text-red' : 'text-green'"
      >
        {{ errorMessage || successMessage }}
      </app-normal-text>
    </div>
  </div>
</template>
<script lang="ts">
import AppNormalText from "../AppTypography/normalText.vue";
import { defineComponent, onMounted, ref, watch } from "vue";
import { Logic } from "../../composable";
import { FormRule } from "../../types";
import AppIcon from "../AppIcon";

/**
 * AppTextField Component
 *
 * A reusable text field component with validation and customizable slots.
 */
export default defineComponent({
  components: {
    AppNormalText,
    AppIcon,
  },
  props: {
    /**
     * Placeholder text for the input field.
     */
    placeholder: {
      type: String,
      default: "",
      required: false,
    },
    /**
     * label text for the input field.
     */
    label: {
      type: String,
      default: "",
      required: false,
    },
    /**
     * Custom CSS classes to apply to the input field container.
     */
    customClass: {
      type: String,
      default: "",
      required: false,
    },
    /**
     *  An array of validation rules to apply to the input field.
     */
    rules: {
      type: Object as () => FormRule[],
      required: false,
    },
    /**
     * The v-model value of the input field.
     */
    modelValue: {
      default: "",
      required: false,
    },
    /**
     *  The type of the input field (e.g., "text", "password", "email").
     */
    type: {
      type: String,
      default: "text",
      required: false,
    },
    /**
     * The name of the input field (used for validation messages).
     */
    name: {
      type: String,
      default: "",
      required: false,
    },
    /**
     *  Determines whether the input field is disabled.
     */
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     *  A value to update the input field with (used for external updates).
     */
    updateValue: {
      type: String,
      default: "",
      required: false,
    },
    /**
     * Determines whether the input is formatted as money.
     */
    isFormatted: {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     * Error message to display below the input field.
     */
    errorMessage: {
      type: String,
      default: "",
      required: false,
    },
    /**
     * Success message to display below the input field.
     */
    successMessage: {
      type: String,
      default: "",
      required: false,
    },
  },
  name: "AppTextField",
  emits: ["update:modelValue"],
  setup(props: any, context: any) {
    const content = ref("");

    const fieldType = ref("text");

    watch(content, () => {
      context.emit("update:modelValue", content.value);
      setTimeout(() => {
        checkValidation();
      }, 500);
    });

    onMounted(() => {
      if (props.modelValue) {
        content.value = props.modelValue;
      }
      if (props.type) {
        fieldType.value = props.type;
      }
      if (props.isFormatted) {
        content.value = Logic.Common.convertToMoney(
          content.value ? content.value.toString().replace(/,/g, "") : 0,
          false,
          "",
          false
        );
      }
    });
    const validationStatus = ref(true);
    const errorMessage = ref("");

    const isRequired = () => {
      if (content.value) {
        validationStatus.value = true;
      } else {
        validationStatus.value = false;
        errorMessage.value = `${props.name} is required`;
      }
    };

    const isGreaterThan = (count: number) => {
      if (content.value.length > count) {
        validationStatus.value = true;
      } else {
        validationStatus.value = false;
        errorMessage.value = `${props.name} must be more than ${count} characters`;
      }
    };

    const isLessThan = (count: number) => {
      if (content.value.length < count) {
        validationStatus.value = true;
      } else {
        validationStatus.value = false;
        errorMessage.value = `${props.name} must be less than ${count} characters`;
      }
    };

    const isEqualsTo = (count: number) => {
      if (content.value.length == count) {
        validationStatus.value = true;
      } else {
        validationStatus.value = false;
        errorMessage.value = `${props.name} must be ${count} characters`;
      }
    };

    const isCondition = (condition: any, errMsg: string) => {
      if (condition) {
        validationStatus.value = true;
      } else {
        validationStatus.value = false;
        errorMessage.value = errMsg;
      }
    };

    const isGreaterThanOrEqualsTo = (count: number) => {
      if (content.value.length >= count) {
        validationStatus.value = true;
      } else {
        validationStatus.value = false;
        errorMessage.value = `${props.name} must be more than ${
          count - 1
        } characters`;
      }
    };

    const isLessThanOrEqualsTo = (count: number) => {
      if (content.value.length <= count) {
        validationStatus.value = true;
      } else {
        validationStatus.value = false;
        errorMessage.value = `${props.name} must be less than ${
          count + 1
        } characters`;
      }
    };

    const isRegex = (regex: any, errMsg: string) => {
      if (content.value.match(regex)) {
        validationStatus.value = true;
      } else {
        validationStatus.value = false;
        errorMessage.value = errMsg;
      }
    };

    const checkValidation = () => {
      if (props.rules) {
        for (let index = 0; index < props.rules.length; index++) {
          const rule = props.rules[index];
          if (rule.type == "isRequired") {
            isRequired();
          }

          if (rule.type == "isGreaterThan") {
            isGreaterThan(rule.value);
          }

          if (rule.type == "isLessThan") {
            isLessThan(rule.value);
          }

          if (rule.type == "isEqualsTo") {
            isEqualsTo(rule.value);
          }

          if (rule.type == "isGreaterThanOrEqualsTo") {
            isGreaterThanOrEqualsTo(rule.value);
          }

          if (rule.type == "isLessThanOrEqualsTo") {
            isLessThanOrEqualsTo(rule.value);
          }

          if (rule.type == "isRegex") {
            isRegex(rule.value, rule.errorMessage);
          }

          if (rule.type == "isCondition") {
            isCondition(rule.value, rule.errorMessage);
          }
        }
      }
    };

    watch(content, () => {
      checkValidation();
      if (props.isFormatted) {
        content.value = Logic.Common.convertToMoney(
          content.value ? content.value.toString().replace(/,/g, "") : 0,
          false,
          "",
          false
        );
      }
    });

    watch(props, () => {
      if (props.updateValue) {
        content.value = props.updateValue;
      }
    });

    const isNumber = (evt: any) => {
      if (props.type != "tel") return true;

      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    };

    const showError = (message: string) => {
      validationStatus.value = false;
      errorMessage.value = message;
    };

    const isFocused = ref(false);

    const tabIndex = Math.random();

    return {
      content,
      checkValidation,
      isNumber,
      errorMessage,
      validationStatus,
      showError,
      isFocused,
      tabIndex,
      fieldType,
    };
  },
});
</script>
