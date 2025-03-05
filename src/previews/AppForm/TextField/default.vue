<template>
  <div class="space-y-8">
    <!-- Basic Text Fields -->
    <section class="space-y-2">
      <h3 class="text-lg block font-semibold mb-4">Basic Text Fields</h3>
      <div class="space-y-4 max-w-md flex flex-col gap-4">
        <AppTextField v-model="text1" label="Default" />

        <AppTextField
          v-model="text2"
          label="With Supporting Text"
          placeholder="Enter text"
          supportingText="This is a helpful message"
        />

        <AppTextField
          v-model="text3"
          label="Disabled"
          placeholder="Enter text"
          disabled
        />

        <AppTextField
          v-model="text4"
          label="With Error"
          placeholder="Enter text"
          :validationStatus="false"
          errorMessage="This field has an error"
        />

        <AppTextField
          v-model="text5"
          label="With Success"
          placeholder="Enter text"
          successMessage="This field is valid"
        />

        <AppTextField
          v-model="text6"
          label="With Icon Prefix"
          placeholder="Search..."
        >
          <template #inner-prefix>
            <!-- <img
              src="@/assets/svg/All/linear/search-normal.svg"
              class="w-5 h-5"
            /> -->
          </template>
        </AppTextField>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { AppTextField } from "../../../components";

const text1 = ref("");
const text2 = ref("");
const text3 = ref("");
const text4 = ref("");
const text5 = ref("");
const text6 = ref("");
</script>
