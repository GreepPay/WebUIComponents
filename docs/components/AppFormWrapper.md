# AppFormWrapper

> AppFormWrapper Component

A wrapper component for forms, providing validation functionality for child components.
It iterates through the child components and triggers their validation methods if they exist.

## Props

| Prop name  | Description                                                                                                                                                                                                                                         | Type   | Values | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------- |
| parentRefs | A collection of refs to child components that need validation. The keys of the object<br/>should correspond to the `ref` attribute set on the child component. The values should<br/>be the component instance itself. This is a required property. | object | -      |         |

## Slots

| Name    | Description                                                            | Bindings |
| ------- | ---------------------------------------------------------------------- | -------- |
| default | Default slot for form elements. All form fields should be placed here. |          |

---
