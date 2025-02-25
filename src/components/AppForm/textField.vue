<template>
  <div class="flex w-full flex-col relative">
    <app-normal-text v-if="hasTitle" customClass="pb-2!">
      <!--
        @slot title
        Use this slot to display the title of the text field.
      -->
      <slot name="title" />
    </app-normal-text>
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
      <div
        :class="`flew-grow w-full space-x-1 flex-row flex items-center justify-between ${padding} ${customClass} border-gray-300 border-[1px]  bg-white rounded-md ${
          isFocused ? 'border-primary ' : ''
        } ${validationStatus == false ? 'border-red-500 border-[1px]!' : ''}`"
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
      v-if="!validationStatus"
      class="w-full flex flex-row pt-1 justify-start"
    >
      <app-normal-text :customClass="' text-left'" :color="`text-red-500`">
        {{ errorMessage }}
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
     *  Padding inside the input field container.
     */
    padding: {
      type: String,
      default: "py-3 px-3",
      required: false,
    },
    /**
     * Placeholder text for the input field.
     */
    placeholder: {
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
     *  Determines whether to display the title slot.
     */
    hasTitle: {
      type: Boolean,
      default: false,
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
