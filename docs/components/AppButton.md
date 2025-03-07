# Button Component

The Button component is a versatile and customizable button that supports different variants, states, and icons.

## Import

```js
import { AppButton } from '@greeppay/ui-components';
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'primary'` \| `'secondary'` \| `'primary-white'` \| `'text'` | `'primary'` | The variant style to apply to the button |
| outlined | `boolean` | `false` | Whether to show the button in outlined style |
| disabled | `boolean` | `false` | Whether the button is disabled |
| loading | `boolean` | `false` | Whether to show a loading spinner |
| customClass | `string` | `''` | Custom CSS classes to apply to the button |

## Slots

| Name | Description |
|------|-------------|
| default | The button's label content |
| icon | Optional icon to show before the label |

## Examples

### Default Button

:::preview
demo-preview=../../src/previews/AppButton/default.vue
:::

### Custom Styles

:::preview
demo-preview=../../src/previews/AppButton/custom.vue
:::
