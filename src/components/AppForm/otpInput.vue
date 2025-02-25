<template>
  <div class="flex flex-row items-center justify-around space-x-1 z-40">
    <span v-for="index in numberOfInput" :key="index + '' + uniqueKey">
      <input
        :id="'' + uniqueKey + index"
        v-model="otps[index - 1]"
        type="tel"
        class="md:w-[53px]! md:h-[53px]! w-[40px] h-[40px] text-lg text-center focus:outline-hidden bg-lightGrayVaraint! custom-border"
        :disabled="isDisabled"
        @keypress="onKeyPress"
        @keyup.right="focusInputByRef('' + uniqueKey + (index + 1))"
        @keyup.left="focusInputByRef('' + uniqueKey + (index - 1))"
        @keyup.delete="focusInputByRef('' + uniqueKey + (index - 1))"
        @paste="onPaste"
        @input="
          onInput($event, '' + uniqueKey + (index + 1));
          setValue();
        "
      />
    </span>
  </div>
  <!--
   * @slot This component does not have any slots.
   -->
</template>

<script lang="ts">
import { ref, computed, watch, defineComponent } from "vue";

/**
 * OTP Input component for entering numeric OTP codes.
 */
export default defineComponent({
  name: "AppOTPInput",

  props: {
    /**
     * Disables all input fields in the OTP input.
     */
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * A unique key to distinguish this OTP input from others, especially when multiple OTP inputs are rendered on the same page.
     */
    uniqueKey: {
      type: String,
      default: "otpDigit",
    },
    /**
     * Indicates whether the OTP input should display an error state.
     */
    isError: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * When set to true, resets the OTP input to an empty state.
     */
    shouldResetOTP: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * The number of input fields to render for the OTP code.
     */
    numberOfInput: {
      type: Number,
      required: false,
      default: 4,
    },
    /**
     * Custom styles to apply to each OTP input field.
     */
    otpInputStyle: {
      type: Object,
      required: false,
      default: function () {
        return {
          width: "40px",
          height: "40px",
          "margin-right": "10px",
          "text-align": "center",
          "font-size": "20px",
          appearance: "none",
          "-webkit-appearance": "none",
          "border-radius": "2px",
        };
      },
    },
    /**
     * Styles to apply when the OTP input is in an error state.
     */
    error: {
      type: Object,
      required: false,
      default: function () {
        return {
          "border-color": "red",
        };
      },
    },
    /**
     * Callback function triggered when the OTP value changes.  Receives the current OTP value as an argument.
     */
    onChangeOTP: {
      type: Function,
      required: true,
    },
    /**
     * The input type for the OTP fields. Defaults to 'text'.  Consider using 'tel' for number-only input on mobile devices.
     */
    type: {
      type: String,
      default: "text",
    },
  },
  emits: ["update:modelValue"],
  setup(props: any, context) {
    const otps = ref<String[]>([]);

    const otp = computed(() => {
      const otp = otps.value.join("");
      if (otp) return parseInt(otp, 10);
      return null;
    });

    const shouldResetOTP = ref(false);

    const inputStyle = computed(() => {
      if (props.isError) {
        return {
          ...props.otpInputStyle,
          ...props.error,
        };
      }

      return {
        ...props.otpInputStyle,
      };
    });

    const resetOTPInput = () => {
      otps.value = [];
    };

    const watchResetOtp = (newProp: boolean, oldProp: boolean) => {
      if (newProp === !oldProp) {
        resetOTPInput();
      }
    };

    watch(shouldResetOTP, watchResetOtp);

    const onKeyPress = (event: any) => {
      if (event.target.value.length === 1) {
        return event.preventDefault();
      }
    };

    const focusInputByRef = (id: any) => {
      const element = document.getElementById(id);
      if (element) {
        element.focus();
      }
    };

    const onInput = (event: any, id: string) => {
      props.onChangeOTP(otp.value);
      if (event.inputType === "deleteContentBackward") return false;

      focusInputByRef(id);

      event.preventDefault();
    };

    const setValue = () => {
      context.emit("update:modelValue", otp.value);
    };

    const onPaste = (event: any) => {
      // Getting copy text
      const clipboardData =
        event.clipboardData || event.originalEvent.clipboardData;
      const pastedData = clipboardData.getData("Text");
      const arrayOfNumbers = pastedData.split("");

      // set the length to 6
      if (arrayOfNumbers.length > 6) arrayOfNumbers.slice(0, 6);

      otps.value = arrayOfNumbers;

      // focus the last input element according to length
      const id = `${props.uniqueKey}${arrayOfNumbers.length}`;
      focusInputByRef(id);

      event.preventDefault();
      setValue();
    };

    return {
      otp,
      inputStyle,
      onPaste,
      onInput,
      onKeyPress,
      focusInputByRef,
      otps,
      setValue,
    };
  },
});
</script>
