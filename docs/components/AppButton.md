# AppButton

> Button Component

This component is a reusable button with customizable styling.

## Props

| Prop name   | Description                                                          | Type   | Values                                                                                 | Default      |
| ----------- | -------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------- | ------------ |
| bgColor     | Background color of the button. Uses TailwindCSS classes.            | string | `'bg-primary'`, `'bg-secondary'`, `'bg-success'`, `'bg-error'`, `'bg-warning'`, `etc.` | "bg-primary" |
| textColor   | Text color of the button. Uses TailwindCSS classes.                  | string | `'text-white'`, `'text-black'`, `'text-gray-500'`, `etc.`                              | "text-white" |
| customClass | Custom CSS classes to apply to the button. Uses TailwindCSS classes. | string | -                                                                                      | ""           |
| padding     | Padding of the button. Uses TailwindCSS classes.                     | string | `'py-2 px-4'`, `'py-1 px-2'`, `'py-3 px-6'`, `etc.`                                    | "py-2 px-4 " |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---
