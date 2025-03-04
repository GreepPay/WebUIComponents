# AppTextField

> AppTextField Component

:::preview title || A reusable input component with validation and customizable slots.

demo-preview=../../src/components/AppForm/textField.vue

:::

A reusable text field component with validation and customizable slots.

## Props

| Prop name   | Description                                                         | Type                          | Values | Default     |
| ----------- | ------------------------------------------------------------------- | ----------------------------- | ------ | ----------- |
| padding     | Padding inside the input field container.                           | string                        | -      | "py-3 px-3" |
| placeholder | Placeholder text for the input field.                               | string                        | -      | ""          |
| customClass | Custom CSS classes to apply to the input field container.           | string                        | -      | ""          |
| hasTitle    | Determines whether to display the title slot.                       | boolean                       | -      | false       |
| rules       | An array of validation rules to apply to the input field.           | Object as () =&gt; FormRule[] | -      |             |
| modelValue  | The v-model value of the input field.                               | string                        | -      | ""          |
| type        | The type of the input field (e.g., "text", "password", "email").    | string                        | -      | "text"      |
| name        | The name of the input field (used for validation messages).         | string                        | -      | ""          |
| disabled    | Determines whether the input field is disabled.                     | boolean                       | -      | false       |
| updateValue | A value to update the input field with (used for external updates). | string                        | -      | ""          |
| isFormatted | Determines whether the input is formatted as money.                 | boolean                       | -      | false       |

## Events

| Event name        | Properties | Description |
| ----------------- | ---------- | ----------- |
| update:modelValue |            |

## Slots

| Name         | Description  | Bindings |
| ------------ | ------------ | -------- |
| title        | title        |          |
| outer-prefix | outer-prefix |          |
| inner-prefix | inner-prefix |          |
| inner-suffix | inner-suffix |          |
| outer-suffix | outer-suffix |          |

---
