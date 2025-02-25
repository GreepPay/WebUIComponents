# AppHeaderText

> Header Text Component

This component renders a heading (h3) with customizable size, color, and additional CSS classes.

## Props

| Prop name   | Description                                                                                                                     | Type   | Values                   | Default      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------ | ------------ |
| size        | Defines the size of the header text.<br/>`@default` lg                                                                          | string | `lg`, `xl`, `base`, `xs` | "lg"         |
| color       | Defines the color of the header text.<br/>Accepts any valid tailwind color class e.g. `text-red-500`.<br/>`@default` text-black | string | -                        | "text-black" |
| customClass | Allows to add custom classes to the header text.<br/>`@default` ""                                                              | string | -                        | ""           |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---
