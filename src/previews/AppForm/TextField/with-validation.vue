<template>
  <AppFormWrapper>
    <AppTextField
      v-model="email"
      label="Email"
      type="email"
      placeholder="example@email.com"
      :state="emailState"
      :supportingText="emailSupportingText"
      @input="validateEmail"
    />
  </AppFormWrapper>
</template>

<script setup>
import { ref } from 'vue'
import { AppTextField, AppFormWrapper } from '../../../components'

const email = ref('')
const emailState = ref('default')
const emailSupportingText = ref('Enter your email address')

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value) {
    emailState.value = 'default'
    emailSupportingText.value = 'Enter your email address'
  } else if (emailRegex.test(email.value)) {
    emailState.value = 'success'
    emailSupportingText.value = 'Valid email address'
  } else {
    emailState.value = 'error'
    emailSupportingText.value = 'Please enter a valid email address'
  }
}
</script>
