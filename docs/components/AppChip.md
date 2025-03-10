# AppChip

> Chip Component

Displays compact elements that represent an input, attribute, or action

## Props

| Prop name   | Description                                                   | Type    | Values               | Default          |
| ----------- | ------------------------------------------------------------- | ------- | -------------------- | ---------------- |
| variant     | Visual variant of the chip                                    | string  | `filled`, `outlined` | 'filled'         |
| bgColor     | Background color class (TailwindCSS) - used in filled variant | string  | -                    | 'bg-primary'     |
| textColor   | Text color class (TailwindCSS)                                | string  | -                    | 'text-white'     |
| borderColor | Border color class (TailwindCSS) - used in outlined variant   | string  | -                    | 'border-primary' |
| closable    | Whether the chip can be closed/removed                        | boolean | -                    | false            |
| disabled    | Whether the chip is disabled                                  | boolean | -                    | false            |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| close      |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| prefix  |             |          |
| default |             |          |
| suffix  |             |          |

---
