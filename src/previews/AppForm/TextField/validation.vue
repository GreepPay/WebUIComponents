<template>
  <div class="space-y-8">
    <!-- Validation Examples -->
    <section class="space-y-2">
      <h3 class="text-lg font-semibold">Validation Examples</h3>
      <div class="space-y-4 max-w-md">
        <!-- Required Field -->
        <AppTextField
          v-model="required"
          label="Required Field"
          placeholder="This field is required"
          :rules="[{ required: true, message: 'This field is required' }]"
        />

        <!-- Email Validation -->
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Enter valid email"
          :rules="[
            { required: true, message: 'Email is required' },
            { email: true, message: 'Please enter a valid email' }
          ]"
        />

        <!-- Password Requirements -->
        <AppTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="Enter password"
          :rules="[
            { required: true, message: 'Password is required' },
            { min: 8, message: 'Password must be at least 8 characters' },
            { pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/, message: 'Password must contain uppercase, lowercase and numbers' }
          ]"
        />

        <!-- Custom Validation -->
        <AppTextField
          v-model="phone"
          label="Phone Number"
          placeholder="Enter phone number"
          :rules="[
            { required: true, message: 'Phone number is required' },
            { pattern: /^\+?[1-9]\d{1,14}$/, message: 'Please enter a valid phone number' }
          ]"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AppTextField } from "../../../components";

const required = ref('');
const email = ref('');
const password = ref('');
const phone = ref('');
</script>
