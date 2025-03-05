<template>
  <AppFormWrapper>
    <AppTextField
      v-model="text"
      label="Label"
      placeholder="Placeholder"
      supportingText="This field is disabled"
      disabled
    />
  </AppFormWrapper>
</template>

<script setup>
import { ref } from 'vue'
import { AppTextField, AppFormWrapper } from '../../../components'

const text = ref('')
</script>
