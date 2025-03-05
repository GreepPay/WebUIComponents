# Button Component

> AppButton Component

:::preview Default Button || A versatile button component that supports various styles, colors, and sizes.
demo-preview=../../src/previews/AppButton/default.vue
:::

A reusable button component with customizable styles and colors.

## Colors

:::preview Button Colors || Different color variants for the button component
demo-preview=../../src/previews/AppButton/colors.vue
:::

## Sizes

:::preview Button Sizes || Different size variants using padding classes
demo-preview=../../src/previews/AppButton/sizes.vue
:::

## Custom Styles

:::preview Custom Buttons || Examples of custom styled buttons including outlined, text, and gradient variants
demo-preview=../../src/previews/AppButton/custom.vue
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| bgColor | String | 'bg-black' | Background color using TailwindCSS classes |
| textColor | String | 'text-white' | Text color using TailwindCSS classes |
| padding | String | 'py-2 px-4' | Padding using TailwindCSS classes |
| customClass | String | '' | Additional custom classes |
| icon | String | '' | Icon name from Iconsax library (without the isax- prefix) |
| iconClass | String | 'text-current' | Additional classes for the icon |

## Usage Examples

### Basic Button with Icon
```vue
<AppButton icon="add">Add Item</AppButton>
<AppButton icon="notification">Notifications</AppButton>
<AppButton icon="wallet">Wallet</AppButton>
```

### Color Variants
```vue
<AppButton bgColor="bg-primary">Primary (#10BB76)</AppButton>
<AppButton bgColor="bg-darkGreen">Dark Green (#1F8F69)</AppButton>
<AppButton bgColor="bg-blue-green">Blue Green (#00A0B4)</AppButton>
<AppButton bgColor="bg-blue">Blue (#009DE3)</AppButton>
<AppButton bgColor="bg-red">Red (#FA1919)</AppButton>
<AppButton bgColor="bg-purple">Purple (#8E3BE0)</AppButton>
<AppButton bgColor="bg-orange">Orange (#FFAA1F)</AppButton>
```

### Size Variants
```vue
<AppButton padding="py-1 px-2">Small</AppButton>
<AppButton padding="py-2 px-4">Medium</AppButton>
<AppButton padding="py-3 px-6">Large</AppButton>
```

### Custom Styles
```vue
<!-- Outlined Button with Icon -->
<AppButton 
  bgColor="bg-white" 
  textColor="text-primary"
  customClass="border border-primary"
  icon="edit"
>
  Edit
</AppButton>

<!-- Light Button with Icon -->
<AppButton 
  bgColor="bg-light-gray-one"
  textColor="text-black"
  icon="setting-2"
>
  Settings
</AppButton>

<!-- Gradient Button with Icon -->
<AppButton 
  bgColor="bg-gradient-to-r from-primary to-blue"
  customClass="shadow-lg"
  icon="arrow-right"
>
  Continue
</AppButton>
