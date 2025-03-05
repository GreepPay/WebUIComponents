# Radio Component

The Radio component provides a customizable radio button input for forms.

## Basic Usage

::: demo Basic Radio
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <radio
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
| options | Array | [] | Array of radio options |
| label | String | '' | Label text for the radio group |
| disabled | Boolean | false | Whether the radio group is disabled |
| required | Boolean | false | Whether selection is required |
| error | String | '' | Error message to display |
| direction | String | 'vertical' | Layout direction ('vertical' or 'horizontal') |

## Examples

### Horizontal Layout

::: demo Horizontal Radio Group
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <radio
        v-model="selected"
        :options="options"
        label="Select gender"
        direction="horizontal"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('')
const options = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' }
]
</script>
```
:::

### With Disabled Options

::: demo Radio with Disabled Options
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <radio
        v-model="selected"
        :options="options"
        label="Select subscription"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('')
const options = [
  { label: 'Free', value: 'free' },
  { label: 'Pro', value: 'pro' },
  { label: 'Enterprise (Coming Soon)', value: 'enterprise', disabled: true }
]
</script>
```
:::

### With Custom Content

::: demo Radio with Custom Content
```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <radio
        v-model="selected"
        :options="plans"
        label="Select plan"
      >
        <template #option="{ option }">
          <div class="flex flex-col">
            <span class="font-medium">{{ option.label }}</span>
            <span class="text-sm text-gray-500">{{ option.description }}</span>
            <span class="text-lg font-bold">{{ option.price }}</span>
          </div>
        </template>
      </radio>
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('')
const plans = [
  {
    label: 'Basic Plan',
    value: 'basic',
    description: 'Good for starters',
    price: '$9/month'
  },
  {
    label: 'Pro Plan',
    value: 'pro',
    description: 'Perfect for professionals',
    price: '$29/month'
  },
  {
    label: 'Team Plan',
    value: 'team',
    description: 'Best for teams',
    price: '$99/month'
  }
]
</script>
```
:::
