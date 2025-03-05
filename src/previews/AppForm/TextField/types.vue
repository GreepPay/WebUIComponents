<template>
  <div class="space-y-8">
    <!-- Input Types -->
    <section class="space-y-2">
      <h3 class="text-lg font-semibold">Input Types</h3>
      <div class="space-y-4 max-w-md">
        <AppTextField
          v-model="text"
          label="Text"
          type="text"
          placeholder="Regular text input"
        />

        <AppTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="Enter password"
        />

        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Enter email"
        />

        <AppTextField
          v-model="number"
          label="Number"
          type="number"
          placeholder="Enter number"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AppTextField } from "../../../components";

const text = ref('');
const password = ref('');
const email = ref('');
const number = ref('');
</script>
