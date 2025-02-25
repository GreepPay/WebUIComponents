# AppModal

> Modal component that displays content in an overlay.

## Props

| Prop name   | Description                                                                                | Type    | Values | Default |
| ----------- | ------------------------------------------------------------------------------------------ | ------- | ------ | ------- |
| canClose    | Determines whether the modal can be closed by clicking outside or pressing the close icon. | boolean | -      | true    |
| close       | Function to execute when the modal is closed.<br/>`@required` true                         | func    | -      |         |
| customClass | Custom CSS classes to apply to the modal container.                                        | string  | -      | ""      |
| title       | Title of the modal, displayed in the header.                                               | string  | -      | ""      |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---
