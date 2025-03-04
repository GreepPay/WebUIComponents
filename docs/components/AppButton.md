# Button Component

The Button component is a versatile, customizable button that supports various styles and states.

## Basic Usage

::: demo Basic Button Examples
```vue
<template>
  <div class="space-x-4">
    <AppButton>Default Button</AppButton>
    <AppButton bgColor="bg-secondary">Secondary</AppButton>
    <AppButton bgColor="bg-success">Success</AppButton>
  </div>
</template>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| bgColor | String | 'bg-primary' | Background color class (TailwindCSS) |
| textColor | String | 'text-white' | Text color class (TailwindCSS) |
| customClass | String | '' | Additional CSS classes |
| padding | String | 'py-2 px-4' | Padding classes (TailwindCSS) |

## Examples

### Color Variants

::: demo Color Variants
```vue
<template>
  <div class="space-y-4">
    <div class="space-x-4">
      <AppButton>Primary</AppButton>
      <AppButton bgColor="bg-secondary">Secondary</AppButton>
      <AppButton bgColor="bg-success">Success</AppButton>
    </div>
    <div class="space-x-4">
      <AppButton bgColor="bg-error">Error</AppButton>
      <AppButton bgColor="bg-warning" textColor="text-gray-900">Warning</AppButton>
      <AppButton bgColor="bg-gray-500">Neutral</AppButton>
    </div>
  </div>
</template>
```
:::

### Custom Styles

::: demo Custom Button Styles
```vue
<template>
  <div class="space-y-4">
    <div class="space-x-4">
      <AppButton 
        customClass="border-2 border-primary bg-transparent hover:bg-primary"
        textColor="text-primary hover:text-white"
      >
        Outline
      </AppButton>
      <AppButton 
        customClass="rounded-full"
        bgColor="bg-purple-500 hover:bg-purple-600"
      >
        Rounded
      </AppButton>
      <AppButton 
        customClass="shadow-lg transform hover:-translate-y-1 transition-all"
        bgColor="bg-gradient-to-r from-blue-500 to-purple-500"
      >
        Gradient
      </AppButton>
    </div>
  </div>
</template>
```
:::

### Sizes

::: demo Button Sizes
```vue
<template>
  <div class="space-x-4 items-center flex">
    <AppButton padding="py-1 px-2" customClass="text-sm">
      Small
    </AppButton>
    <AppButton>
      Medium
    </AppButton>
    <AppButton padding="py-3 px-6" customClass="text-lg">
      Large
    </AppButton>
  </div>
</template>
```
:::

### With Icons

::: demo Buttons with Icons
```vue
<template>
  <div class="space-x-4">
    <AppButton>
      <span class="mr-2">🚀</span>
      Launch
    </AppButton>
    <AppButton bgColor="bg-green-500">
      Save
      <span class="ml-2">💾</span>
    </AppButton>
    <AppButton bgColor="bg-red-500">
      <span class="mr-2">🗑️</span>
      Delete
    </AppButton>
  </div>
</template>
```
:::

### Interactive States

::: demo Interactive Button States
```vue
<template>
  <div class="space-x-4">
    <AppButton 
      customClass="transition-all duration-300 hover:bg-primary-dark focus:ring-4 focus:ring-primary/50"
    >
      Hover & Focus
    </AppButton>
    <AppButton 
      customClass="opacity-50 cursor-not-allowed"
      bgColor="bg-gray-500"
    >
      Disabled
    </AppButton>
    <AppButton 
      customClass="active:scale-95 transform transition-transform"
      bgColor="bg-indigo-500"
    >
      Click Me!
    </AppButton>
  </div>
</template>
```
:::

### Loading State

::: demo Loading Button State
```vue
<template>
  <div class="space-x-4">
    <AppButton 
      customClass="relative"
      :class="{ 'cursor-wait': isLoading }"
      @click="toggleLoading"
    >
      <span :class="{ 'opacity-0': isLoading }">
        {{ isLoading ? 'Processing...' : 'Click to Load' }}
      </span>
      <span 
        v-if="isLoading" 
        class="absolute inset-0 flex items-center justify-center"
      >
        ⏳
      </span>
    </AppButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    toggleLoading() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    }
  }
}
</script>
```
:::
