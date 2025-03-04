# Select Component

The Select component provides a customizable dropdown for selecting options.

## Basic Usage

::: demo Basic Select
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <select
        v-model="selected"
        :options="options"
        label="Choose an option"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('')
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
]
</script>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | Any | null | v-model binding value |
| options | Array | [] | Array of options to display |
| label | String | '' | Label text for the select |
| placeholder | String | 'Select an option' | Placeholder text |
| disabled | Boolean | false | Whether the select is disabled |
| required | Boolean | false | Whether the select is required |
| error | String | '' | Error message to display |
| multiple | Boolean | false | Whether multiple selection is allowed |

## Examples

### With Groups

::: demo Grouped Select Options
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <select
        v-model="selected"
        :options="groupedOptions"
        label="Select a country"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('')
const groupedOptions = [
  {
    label: 'Africa',
    options: [
      { label: 'Nigeria', value: 'NG' },
      { label: 'Kenya', value: 'KE' },
      { label: 'South Africa', value: 'ZA' }
    ]
  },
  {
    label: 'Europe',
    options: [
      { label: 'United Kingdom', value: 'GB' },
      { label: 'France', value: 'FR' },
      { label: 'Germany', value: 'DE' }
    ]
  }
]
</script>
```
:::

### Multiple Selection

::: demo Multiple Select
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <select
        v-model="selected"
        :options="options"
        label="Select multiple items"
        multiple
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref([])
const options = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' }
]
</script>
```
:::

### With Search

::: demo Searchable Select
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <select
        v-model="selected"
        :options="options"
        label="Search and select"
        searchable
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('')
const options = [
  { label: 'JavaScript', value: 'js' },
  { label: 'Python', value: 'py' },
  { label: 'Ruby', value: 'rb' },
  { label: 'Java', value: 'java' },
  { label: 'PHP', value: 'php' }
]
</script>
```
:::
