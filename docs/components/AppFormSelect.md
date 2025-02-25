# AppSelect

> AppSelect component for selecting options from a dropdown.

## Props

| Prop name     | Description                                                                              | Type                             | Values | Default     |
| ------------- | ---------------------------------------------------------------------------------------- | -------------------------------- | ------ | ----------- |
| withKey       | Determines whether to display the key along with the value in the input field.           | boolean                          | -      | false       |
| placeholder   | The placeholder text for the input field.                                                | string                           | -      | ""          |
| options       | An array of options to display in the select dropdown.                                   | Array as () =&gt; SelectOption[] | -      |             |
| paddings      | Custom padding for the select container.                                                 | string                           | -      | "py-4 px-3" |
| padding       | <br/>`@deprecated` Use `paddings` instead.                                               | string                           | -      | "py-4 px-3" |
| customClass   | Custom CSS classes to apply to the select container.                                     | string                           | -      | ""          |
| defaultValues | An array of default keys to select when the component is initialized (for multi-select). | undefined                        | -      | []          |
| modelValue    | The currently selected value (or array of values for multi-select). Use with `v-model`.  | String \|\| Array                | -      | false       |
| isMultiple    | Determines if the select allows multiple selections.                                     | boolean                          | -      | false       |
| hasTitle      | Determines whether to display a title above the select.                                  | boolean                          | -      | false       |
| defaultSize   | Default size classes for the component (e.g., width).                                    | string                           | -      | "w-full"    |
| autoComplete  | Determines whether to enable auto-complete functionality with a search field.            | boolean                          | -      | false       |

## Events

| Event name        | Properties | Description                            |
| ----------------- | ---------- | -------------------------------------- |
| update:modelValue |            | Emitted when the `modelValue` changes. |
| OnOptionSelected  |            | Emitted when an option is selected.    |
| OnSearch          |            | Emitted when the search value changes. |

## Slots

| Name  | Description | Bindings |
| ----- | ----------- | -------- |
| title | title       |          |

---
