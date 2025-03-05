# Chip Component

The Chip component is used to represent small blocks of information, typically used for input, filtering, or tags.

## Basic Usage

::: demo Basic Chip Examples
```vue
<template>
  <div class="flex space-x-2">
    <AppChip>Basic Chip</AppChip>
    <AppChip variant="outlined">Outlined Chip</AppChip>
  </div>
</template>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | String | 'filled' | Visual variant ('filled' or 'outlined') |
| bgColor | String | 'bg-primary' | Background color class (TailwindCSS) |
| textColor | String | 'text-white' | Text color class (TailwindCSS) |
| borderColor | String | 'border-primary' | Border color class for outlined variant |
| closable | Boolean | false | Whether the chip can be closed/removed |
| disabled | Boolean | false | Whether the chip is disabled |

## Examples

### Variants and Colors

::: demo Chip Variants and Colors
```vue
<template>
  <div class="space-y-4">
    <div class="space-x-2">
      <AppChip>Default Chip</AppChip>
      <AppChip
        bgColor="bg-blue-500"
        textColor="text-white"
      >
        Blue Chip
      </AppChip>
      <AppChip
        bgColor="bg-green-500"
        textColor="text-white"
      >
        Green Chip
      </AppChip>
    </div>
    <div class="space-x-2">
      <AppChip variant="outlined">Default Outlined</AppChip>
      <AppChip
        variant="outlined"
        borderColor="border-blue-500"
        textColor="text-blue-500"
      >
        Blue Outlined
      </AppChip>
      <AppChip
        variant="outlined"
        borderColor="border-green-500"
        textColor="text-green-500"
      >
        Green Outlined
      </AppChip>
    </div>
  </div>
</template>
```
:::

### Closable Chips

::: demo Closable Chip Examples
```vue
<template>
  <div class="space-x-2">
    <AppChip
      v-for="(chip, index) in chips"
      :key="index"
      closable
      @close="removeChip(index)"
    >
      {{ chip }}
    </AppChip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chips: ['Chip 1', 'Chip 2', 'Chip 3']
    }
  },
  methods: {
    removeChip(index) {
      this.chips.splice(index, 1)
    }
  }
}
</script>
```
:::

### With Icons

::: demo Chips with Icons
```vue
<template>
  <div class="space-x-2">
    <AppChip>
      <template #prefix>
        <span class="mr-1">🔥</span>
      </template>
      Trending
    </AppChip>
    <AppChip variant="outlined">
      <template #prefix>
        <span class="mr-1">✨</span>
      </template>
      Featured
    </AppChip>
    <AppChip>
      New
      <template #suffix>
        <span class="ml-1">🆕</span>
      </template>
    </AppChip>
  </div>
</template>
```
:::

### Disabled State

::: demo Disabled Chip Examples
```vue
<template>
  <div class="space-x-2">
    <AppChip disabled>Disabled Filled</AppChip>
    <AppChip variant="outlined" disabled>Disabled Outlined</AppChip>
    <AppChip disabled closable>Disabled Closable</AppChip>
  </div>
</template>
```
:::
