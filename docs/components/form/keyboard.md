# Keyboard Component

The Keyboard component provides a customizable numeric keypad for secure input.

## Basic Usage

::: demo Basic Keyboard
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <keyboard
        v-model="value"
        label="Enter PIN"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | String | '' | v-model binding value |
| label | String | '' | Label text for the keyboard |
| maxLength | Number | 4 | Maximum length of input |
| secure | Boolean | true | Whether to show dots instead of numbers |
| shuffled | Boolean | false | Whether to shuffle key positions |
| disabled | Boolean | false | Whether the keyboard is disabled |

## Examples

### Secure Input

::: demo Secure Keyboard Input
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <keyboard
        v-model="pin"
        label="Enter Security PIN"
        :maxLength="6"
        secure
      />
      <div class="mt-4 text-sm text-gray-600">
        Entered length: {{ pinLength }}/6
      </div>
    </AppForm>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const pin = ref('')
const pinLength = computed(() => pin.value.length)
</script>
```
:::

### Shuffled Keys

::: demo Shuffled Keyboard
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <keyboard
        v-model="value"
        label="Enter with Shuffled Keys"
        :maxLength="4"
        shuffled
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```
:::
