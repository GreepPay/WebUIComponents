<template>
  <AppFormWrapper>
    <AppTextField
      v-model="text"
      label="Label"
      placeholder="Placeholder"
      supportingText="Error message"
      state="error"
    />
  </AppFormWrapper>
</template>

<script setup>
import { ref } from 'vue'
import { AppTextField, AppFormWrapper } from '../../../components'

const text = ref('Invalid input')
</script>
