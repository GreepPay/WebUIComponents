# OTP Input Component

The OTP Input component provides a user-friendly way to enter one-time passwords or verification codes.

## Basic Usage

::: demo Basic OTP Input

```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <otpInput v-model="otp" :length="6" />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from "vue";

const otp = ref("");
</script>
```

:::preview title || Basic OTP Input.
demo-preview=../../../src/previews/AppForm/OTPInput/default.vue

:::

## Props

| Prop       | Type    | Default  | Description                     |
| ---------- | ------- | -------- | ------------------------------- |
| modelValue | String  | ''       | v-model binding value           |
| length     | Number  | 6        | Number of OTP digits            |
| type       | String  | 'number' | Input type ('number' or 'text') |
| secure     | Boolean | false    | Whether to mask input as dots   |
| disabled   | Boolean | false    | Whether the input is disabled   |
| error      | String  | ''       | Error message to display        |

## Examples

### Custom Length

::: demo Custom Length OTP

```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <otpInput v-model="otp" :length="4" label="Enter 4-digit code" />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from "vue";

const otp = ref("");
</script>
```

:::

### Secure Input

::: demo Secure OTP Input

```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <otpInput v-model="otp" :length="6" secure label="Enter secure code" />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from "vue";

const otp = ref("");
</script>
```

:::

### With Error State

::: demo OTP Input with Error

```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <otpInput v-model="otp" :length="6" :error="error" />
    </AppForm>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const otp = ref("");
const error = ref("");

watch(otp, (value) => {
  error.value = value.length < 6 ? "Please enter all digits" : "";
});
</script>
```

:::
