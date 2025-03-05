<template>
  <div class="space-y-8">
    <!-- Primary Variant -->
    <section class="space-y-2">
      <h3 class="text-lg font-semibold">Primary Variant</h3>
      <div class="flex flex-wrap gap-4">
        <AppButton variant="primary">
          <!-- <template #icon>
            <img
              src="@/assets/svg/All/linear/wallet.svg"
              class="w-5 invert h-5"
            />
          </template> -->
          Normal
        </AppButton>

        <AppButton variant="primary" outlined>
          <!-- <template #icon>
            <img src="@/assets/svg/All/linear/wallet.svg" class="w-5 h-5" />
          </template> -->
          Outlined
        </AppButton>

        <AppButton variant="primary" disabled>
          <template #icon>
            <!-- <img src="@/assets/svg/All/linear/wallet.svg" class="w-5 h-5 invert" /> -->
          </template>
          Disabled
        </AppButton>

        <AppButton variant="primary" loading>
          <!-- <template #icon>
            <img src="@/assets/svg/All/linear/wallet.svg" class="w-5 invert h-5" />
          </template> -->
          Loading
        </AppButton>
      </div>
    </section>

    <!-- Secondary Variant -->
    <section class="space-y-2">
      <h3 class="text-lg font-semibold">Secondary Variant</h3>
      <div class="flex flex-wrap gap-4">
        <AppButton variant="secondary">
          <!-- <template #icon>
            <img src="@/assets/svg/All/linear/add.svg" class="w-5 invert h-5" />
          </template> -->
          Normal
        </AppButton>

        <AppButton variant="secondary" outlined>
          <!-- <template #icon>
            <img src="@/assets/svg/All/linear/add.svg" class="w-5 h-5" />
          </template> -->
          Outlined
        </AppButton>

        <AppButton variant="secondary" disabled>
          <!-- <template #icon>
            <img src="@/assets/svg/All/linear/add.svg" class="w-5 h-5" />
          </template> -->
          Disabled
        </AppButton>

        <AppButton variant="secondary" loading>
          <!-- <template #icon>
            <img src="@/assets/svg/All/linear/add.svg" class="w-5 h-5" />
          </template> -->
          Loading
        </AppButton>
      </div>
    </section>

    <!-- Primary White Variant -->
    <section class="space-y-2 bg-[#0A141E] p-4 rounded-lg">
      <h3 class="text-lg font-semibold text-white">Primary White Variant</h3>
      <div class="flex flex-wrap gap-4">
        <AppButton variant="primary-white">
          <!-- <template #icon>
            <img src="@/assets/svg/All/linear/notification.svg" class="w-5 h-5" />
          </template> -->
          Normal
        </AppButton>

        <AppButton variant="primary-white" outlined>
          <!-- <template #icon>
            <img src="@/assets/svg/All/linear/notification.svg" class="w-5 h-5" />
          </template> -->
          Outlined
        </AppButton>

        <AppButton variant="primary-white" disabled>
          <!-- <template #icon>
            <img src="@/assets/svg/All/linear/notification.svg" class="w-5 h-5" />
          </template> -->
          Disabled
        </AppButton>

        <AppButton variant="primary-white" loading>
          <!-- <template #icon>
            <img src="@/assets/svg/All/linear/notification.svg" class="w-5 h-5" />
          </template> -->
          Loading
        </AppButton>
      </div>
    </section>

    <!-- Text Variant -->
    <section class="space-y-2">
      <h3 class="text-lg font-semibold">Text Variant</h3>
      <div class="flex flex-wrap gap-4">
        <AppButton variant="text">
          <!-- <template #icon>
            <img src="@/assets/svg/All/linear/user.svg" class="w-5 h-5" />
          </template> -->
          Normal
        </AppButton>

        <AppButton variant="text" outlined>
          <!-- <template #icon>
            <img src="@/assets/svg/All/linear/user.svg" class="w-5 h-5" />
          </template> -->
          Outlined
        </AppButton>

        <AppButton variant="text" disabled>
          <!-- <template #icon>
            <img src="@/assets/svg/All/linear/user.svg" class="w-5 h-5" />
          </template> -->
          Disabled
        </AppButton>

        <AppButton variant="text" loading>
          <!-- <template #icon>
            <img src="@/assets/svg/All/linear/user.svg" class="w-5 h-5" />
          </template> -->
          Loading
        </AppButton>
      </div>
    </section>
  </div>
</template>

<script setup>
import { AppButton } from "../../components";
</script>
