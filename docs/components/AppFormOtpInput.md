# AppOTPInput

> OTP Input component for entering numeric OTP codes.

## Props

| Prop name      | Description                                                                                                                | Type    | Values | Default                             |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | ------ | ----------------------------------- |
| isDisabled     | Disables all input fields in the OTP input.                                                                                | boolean | -      | false                               |
| uniqueKey      | A unique key to distinguish this OTP input from others, especially when multiple OTP inputs are rendered on the same page. | string  | -      | "otpDigit"                          |
| isError        | Indicates whether the OTP input should display an error state.                                                             | boolean | -      | false                               |
| shouldResetOTP | When set to true, resets the OTP input to an empty state.                                                                  | boolean | -      | false                               |
| numberOfInput  | The number of input fields to render for the OTP code.                                                                     | number  | -      | 4                                   |
| error          | Styles to apply when the OTP input is in an error state.                                                                   | object  | -      | {<br/> "border-color": "red",<br/>} |
| onChangeOTP    | Callback function triggered when the OTP value changes. Receives the current OTP value as an argument.                     | func    | -      |                                     |
| type           | The input type for the OTP fields. Defaults to 'text'. Consider using 'tel' for number-only input on mobile devices.       | string  | -      | "text"                              |

## Events

| Event name        | Properties | Description |
| ----------------- | ---------- | ----------- |
| update:modelValue |            |

---
