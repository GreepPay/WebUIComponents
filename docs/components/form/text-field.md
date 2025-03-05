# Text Field Component

The Text Field component provides a customizable input field with floating labels that move into the border when the input is active or has content.

## Basic Usage

::: demo Basic Text Field

```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <textField
        v-model="text"
        label="Label"
        placeholder="Placeholder"
        supportingText="Supporting Text"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("");
</script>
```

:::

:::preview title || A reusable input component with validation and customizable slots.

demo-preview=../../../src/previews/AppForm/TextField/default.vue

:::

## States

### Default State

::: demo Default Text Field

```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <textField
        v-model="text"
        label="Label"
        placeholder="Placeholder"
        supportingText="Supporting Text"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("");
</script>
```

:::

### Active State

::: demo Active Text Field

```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <textField
        v-model="text"
        label="Label"
        placeholder="Placeholder"
        supportingText="Supporting Text"
        class="active"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("Input");
</script>
```

:::

### Success State

::: demo Success Text Field

```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <textField
        v-model="text"
        label="Label"
        placeholder="Placeholder"
        supportingText="Supporting Text"
        state="success"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("Valid input");
</script>
```

:::

### Error State

::: demo Error Text Field

```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <textField
        v-model="text"
        label="Label"
        placeholder="Placeholder"
        supportingText="Supporting Text"
        state="error"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("Invalid input");
</script>
```

:::

### Disabled State

::: demo Disabled Text Field

```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <textField
        v-model="text"
        label="Label"
        placeholder="Placeholder"
        supportingText="Supporting Text"
        disabled
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("");
</script>
```

:::

## Props

| Prop           | Type    | Default   | Description                                                |
| -------------- | ------- | --------- | ---------------------------------------------------------- |
| modelValue     | String  | ''        | v-model binding value                                      |
| label          | String  | ''        | Label text that floats when input is active or has content |
| placeholder    | String  | ''        | Placeholder text shown when input is empty                 |
| supportingText | String  | ''        | Helper text shown below the input                          |
| state          | String  | 'default' | Input state ('default', 'success', 'error')                |
| disabled       | Boolean | false     | Whether the input is disabled                              |
| required       | Boolean | false     | Whether the input is required                              |
| type           | String  | 'text'    | Input type (text, email, password, etc.)                   |

## Input Types

### Password Input

::: demo Password Text Field

```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <textField
        v-model="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        supportingText="Must be at least 8 characters"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref } from "vue";

const password = ref("");
</script>
```

:::

### Email Input with Validation

::: demo Email Text Field with Validation

```vue
<template>
  <div class="space-y-4">
    <AppForm>
      <textField
        v-model="email"
        label="Email"
        type="email"
        placeholder="example@email.com"
        :state="emailState"
        :supportingText="emailSupportingText"
        @input="validateEmail"
      />
    </AppForm>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const email = ref("");
const emailState = ref("default");
const emailSupportingText = ref("Enter your email address");

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value) {
    emailState.value = "default";
    emailSupportingText.value = "Enter your email address";
  } else if (emailRegex.test(email.value)) {
    emailState.value = "success";
    emailSupportingText.value = "Valid email address";
  } else {
    emailState.value = "error";
    emailSupportingText.value = "Please enter a valid email address";
  }
};
</script>
```

:::

## Form Example

::: demo Form with Multiple Text Fields

```vue
<template>
  <div class="space-y-4">
    <AppForm @submit="handleSubmit">
      <textField
        v-model="form.firstName"
        label="First Name"
        required
        supportingText="Enter your first name"
      />
      <textField
        v-model="form.lastName"
        label="Last Name"
        required
        supportingText="Enter your last name"
      />
      <textField
        v-model="form.email"
        label="Email"
        type="email"
        required
        :state="emailState"
        :supportingText="emailSupportingText"
        @input="validateEmail"
      />
      <button type="submit">Submit</button>
    </AppForm>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
});

const emailState = ref("default");
const emailSupportingText = ref("Enter your email address");

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email) {
    emailState.value = "default";
    emailSupportingText.value = "Enter your email address";
  } else if (emailRegex.test(form.email)) {
    emailState.value = "success";
    emailSupportingText.value = "Valid email address";
  } else {
    emailState.value = "error";
    emailSupportingText.value = "Please enter a valid email address";
  }
};

const handleSubmit = () => {
  console.log("Form submitted:", form);
};
</script>
```
