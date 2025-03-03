# Chip Component

The Chip component is used to represent small blocks of information, typically used for input, filtering, or tags.

## Basic Usage

```vue
<template>
  <AppChip>Basic Chip</AppChip>
</template>
```

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

### Variants

```vue
<template>
  <div class="space-y-4">
    <div class="space-x-2">
      <AppChip>Filled Chip</AppChip>
      <AppChip variant="outlined">Outlined Chip</AppChip>
    </div>
  </div>
</template>
```

### Custom Colors

```vue
<template>
  <div class="space-x-2">
    <AppChip
      bgColor="bg-blue-500"
      textColor="text-white"
    >
      Blue Chip
    </AppChip>
    <AppChip
      variant="outlined"
      borderColor="border-green-500"
      textColor="text-green-500"
    >
      Green Outlined
    </AppChip>
  </div>
</template>
```

### Closable Chips

```vue
<template>
  <div class="space-x-2">
    <AppChip
      closable
      @close="handleClose"
    >
      Closable Chip
    </AppChip>
    <AppChip
      variant="outlined"
      closable
      @close="handleClose"
    >
      Closable Outlined
    </AppChip>
  </div>
</template>

<script>
export default {
  methods: {
    handleClose() {
      // Handle close event
    }
  }
}
</script>
```

### With Icons/Prefix/Suffix

```vue
<template>
  <div class="space-x-2">
    <AppChip>
      <template #prefix>
        <span class="mr-1">🔥</span>
      </template>
      With Prefix
    </AppChip>
    <AppChip>
      With Suffix
      <template #suffix>
        <span class="ml-1">✨</span>
      </template>
    </AppChip>
  </div>
</template>
```
