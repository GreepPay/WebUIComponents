<template>
  <AppFormWrapper>
    <AppTextField
      v-model="text"
      label="Label"
      placeholder="Placeholder"
      supportingText="Success message"
      state="success"
    />
  </AppFormWrapper>
</template>

<script setup>
import { ref } from 'vue'
import { AppTextField, AppFormWrapper } from '../../../components'

const text = ref('Valid input')
</script>
