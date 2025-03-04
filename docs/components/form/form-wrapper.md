# Form Wrapper Component

The Form Wrapper component provides a container for form elements with consistent styling and behavior.

## Basic Usage

::: demo Basic Form Wrapper
```vue
<template>
  <AppForm @submit="handleSubmit">
    <textField
      v-model="form.name"
      label="Full Name"
      required
    />
    <textField
      v-model="form.email"
      label="Email"
      type="email"
      required
    />
    <button type="submit">Submit</button>
  </AppForm>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: ''
})

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form)
}
</script>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| disabled | Boolean | false | Disable all form inputs |
| loading | Boolean | false | Show loading state |
| validateOnSubmit | Boolean | true | Validate form on submit |
| validateOnChange | Boolean | false | Validate form on input change |

## Examples

### With Validation

::: demo Form with Validation
```vue
<template>
  <AppForm
    @submit="handleSubmit"
    @validation="handleValidation"
  >
    <textField
      v-model="form.username"
      label="Username"
      required
      :rules="usernameRules"
    />
    <textField
      v-model="form.password"
      label="Password"
      type="password"
      required
      :rules="passwordRules"
    />
    <button
      type="submit"
      :disabled="!isValid"
    >
      Submit
    </button>
  </AppForm>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  username: '',
  password: ''
})

const isValid = ref(false)

const usernameRules = [
  v => !!v || 'Username is required'
]

const passwordRules = [
  v => !!v || 'Password is required',
  v => v.length >= 8 || 'Password must be at least 8 characters'
]

const handleSubmit = () => {
  console.log('Form submitted:', form)
}

const handleValidation = (valid) => {
  isValid.value = valid
}
</script>
```
:::

### With Loading State

::: demo Form with Loading State
```vue
<template>
  <AppForm
    :loading="loading"
    @submit="handleSubmit"
  >
    <textField
      v-model="form.name"
      label="Name"
    />
    <textField
      v-model="form.email"
      label="Email"
      type="email"
    />
    <button type="submit">
      {{ loading ? 'Submitting...' : 'Submit' }}
    </button>
  </AppForm>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: ''
})

const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  loading.value = false
}
</script>
```
:::
