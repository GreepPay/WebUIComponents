<template>
  <div class="flex flex-col space-y-4 w-full max-w-md mx-auto">
    <h3 class="text-lg font-medium">Default Select</h3>
    <app-select
      v-model="selectedValue"
      :options="options"
      placeholder="Select an option"
    >
      <template #title>Choose an option</template>
    </app-select>

    <div class="text-sm text-gray-600">
      Selected: {{ selectedValue || 'None' }}
    </div>

    <h3 class="text-lg font-medium mt-6">With Auto-complete</h3>
    <app-select
      v-model="selectedValue2"
      :options="options"
      :auto-complete="true"
      placeholder="Search and select"
    >
      <template #title>Search enabled</template>
    </app-select>

    <h3 class="text-lg font-medium mt-6">Custom Padding</h3>
    <app-select
      v-model="selectedValue3"
      :options="options"
      paddings="py-2 px-4"
      placeholder="Custom padding"
    />

    <h3 class="text-lg font-medium mt-6">With Key Display</h3>
    <app-select
      v-model="selectedValue4"
      :options="options"
      :with-key="true"
      placeholder="Select with key"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppSelect from '../../../components/AppForm/select.vue';

const selectedValue = ref('');
const selectedValue2 = ref('');
const selectedValue3 = ref('');
const selectedValue4 = ref('');

const options = [
  { key: '1', value: 'Option 1' },
  { key: '2', value: 'Option 2' },
  { key: '3', value: 'Option 3' },
  { key: '4', value: 'Option 4' },
  { key: '5', value: 'Option 5' },
];
</script>
