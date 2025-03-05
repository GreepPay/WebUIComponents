# Button Component

A versatile button component that supports various styles, colors, and sizes.

## Basic Usage

:::preview Default Button || A basic button with default styling
demo-preview=../../src/previews/AppButton/default.vue
:::

## Colors

:::preview Button Colors || Buttons with different background colors
demo-preview=../../src/previews/AppButton/colors.vue
:::

## Sizes

:::preview Button Sizes || Buttons in different sizes using padding
demo-preview=../../src/previews/AppButton/sizes.vue
:::

## Custom Styles

:::preview Custom Buttons || Examples of custom styled buttons
demo-preview=../../src/previews/AppButton/custom.vue
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| bgColor | String | 'bg-primary' | Background color using TailwindCSS classes |
| textColor | String | 'text-white' | Text color using TailwindCSS classes |
| padding | String | 'py-2 px-4' | Padding using TailwindCSS classes |
| customClass | String | '' | Additional custom classes |

## Examples

### Color Variants
- Primary: `bgColor="bg-primary"`
- Secondary: `bgColor="bg-secondary"`
- Success: `bgColor="bg-success"`
- Error: `bgColor="bg-error"`
- Warning: `bgColor="bg-warning"`

### Size Variants
- Small: `padding="py-1 px-2"`
- Medium: `padding="py-2 px-4"` (default)
- Large: `padding="py-3 px-6"`

### Custom Styles
- Outlined: Use `bgColor="bg-primary/10"` with `customClass="border border-primary"`
- Text Button: Use `bgColor="bg-transparent"` with hover effects
- Gradient: Use `bgColor="bg-gradient-to-r from-primary to-secondary"`
