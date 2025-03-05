<template>
  <div class="space-y-8">
    <!-- Slot Examples -->
    <section class="space-y-2">
      <h3 class="text-lg font-semibold">Slot Examples</h3>
      <div class="space-y-4 max-w-md">
        <!-- Inner Prefix -->
        <AppTextField
          v-model="amount"
          label="Amount"
          placeholder="Enter amount"
        >
          <template #inner-prefix>
            <span class="text-gray-500">$</span>
          </template>
        </AppTextField>

        <!-- Inner Suffix -->
        <AppTextField
          v-model="weight"
          label="Weight"
          placeholder="Enter weight"
        >
          <template #inner-suffix>
            <span class="text-gray-500">kg</span>
          </template>
        </AppTextField>

        <!-- With Icons -->
        <AppTextField
          v-model="search"
          label="Search"
          placeholder="Search..."
        >
          <template #inner-prefix>
            <img src="../../../assets/svg/All/linear/search-normal.svg" class="w-5 h-5" />
          </template>
        </AppTextField>

        <!-- With Clear Button -->
        <AppTextField
          v-model="clearableText"
          label="Clearable Input"
          placeholder="Type something..."
        >
          <template #inner-suffix>
            <img 
              v-if="clearableText"
              src="../../../assets/svg/All/linear/close-circle.svg" 
              class="w-5 h-5 cursor-pointer"
              @click="clearableText = ''"
            />
          </template>
        </AppTextField>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AppTextField } from "../../../components";

const amount = ref('');
const weight = ref('');
const search = ref('');
const clearableText = ref('');
</script>
