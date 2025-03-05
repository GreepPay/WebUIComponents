# Checkbox Component

The Checkbox component provides a customizable checkbox input for forms.

## Basic Usage

::: demo Basic Checkbox Example
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <checkbox
        v-model="checked"
        label="Accept terms and conditions"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
</script>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | Boolean | false | v-model binding value |
| label | String | '' | Label text for the checkbox |
| disabled | Boolean | false | Whether the checkbox is disabled |
| required | Boolean | false | Whether the checkbox is required |
| error | String | '' | Error message to display |

## Examples

### With Error State

::: demo Checkbox with Error
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <checkbox
        v-model="checked"
        label="Required field"
        required
        :error="error"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const checked = ref(false)
const error = ref('')

watch(checked, (value) => {
  error.value = !value ? 'This field is required' : ''
})
</script>
```
:::

### Disabled State

::: demo Disabled Checkbox
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <checkbox
        v-model="checked"
        label="Disabled checkbox"
        disabled
      />
      <checkbox
        v-model="checkedDisabled"
        label="Disabled and checked"
        disabled
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
const checkedDisabled = ref(true)
</script>
```
:::

### Multiple Checkboxes

::: demo Multiple Checkboxes
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <checkbox
        v-model="preferences.email"
        label="Email notifications"
      />
      <checkbox
        v-model="preferences.sms"
        label="SMS notifications"
      />
      <checkbox
        v-model="preferences.push"
        label="Push notifications"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const preferences = reactive({
  email: true,
  sms: false,
  push: true
})
</script>
```
:::
