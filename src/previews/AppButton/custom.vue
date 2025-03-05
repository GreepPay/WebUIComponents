<template>
  <div class="space-y-8">
    <!-- Custom Examples -->
    <section class="space-y-2">
      <h3 class="text-lg font-semibold">Custom Examples</h3>
      <div class="flex flex-wrap gap-4">
        <!-- Success Button -->
        <AppButton
          variant="secondary"
          customClass="!bg-[#10BB76] !text-white hover:!bg-[#10BB76]/90"
        >
          <template #icon>
            <img src="../../assets/svg/All/linear/tick-circle.svg" class="w-5 h-5" />
          </template>
          Success
        </AppButton>

        <!-- Warning Button -->
        <AppButton
          variant="secondary"
          customClass="!bg-[#F7B84B] !text-white hover:!bg-[#F7B84B]/90"
        >
          <template #icon>
            <img src="../../assets/svg/All/linear/warning-2.svg" class="w-5 h-5" />
          </template>
          Warning
        </AppButton>

        <!-- Error Button -->
        <AppButton
          variant="secondary"
          customClass="!bg-[#F31260] !text-white hover:!bg-[#F31260]/90"
        >
          <template #icon>
            <img src="../../assets/svg/All/linear/close-circle.svg" class="w-5 h-5" />
          </template>
          Error
        </AppButton>

        <!-- Info Button -->
        <AppButton
          variant="secondary"
          customClass="!bg-[#0072F5] !text-white hover:!bg-[#0072F5]/90"
        >
          <template #icon>
            <img src="../../assets/svg/All/linear/info-circle.svg" class="w-5 h-5" />
          </template>
          Info
        </AppButton>
      </div>
    </section>

    <!-- Custom Outlined Examples -->
    <section class="space-y-2">
      <h3 class="text-lg font-semibold">Custom Outlined Examples</h3>
      <div class="flex flex-wrap gap-4">
        <!-- Success Outlined -->
        <AppButton
          variant="secondary"
          outlined
          customClass="!border-[#10BB76] !text-[#10BB76] hover:!bg-[#10BB76]/10"
        >
          <template #icon>
            <img src="../../assets/svg/All/linear/tick-circle.svg" class="w-5 h-5" />
          </template>
          Success
        </AppButton>

        <!-- Warning Outlined -->
        <AppButton
          variant="secondary"
          outlined
          customClass="!border-[#F7B84B] !text-[#F7B84B] hover:!bg-[#F7B84B]/10"
        >
          <template #icon>
            <img src="../../assets/svg/All/linear/warning-2.svg" class="w-5 h-5" />
          </template>
          Warning
        </AppButton>

        <!-- Error Outlined -->
        <AppButton
          variant="secondary"
          outlined
          customClass="!border-[#F31260] !text-[#F31260] hover:!bg-[#F31260]/10"
        >
          <template #icon>
            <img src="../../assets/svg/All/linear/close-circle.svg" class="w-5 h-5" />
          </template>
          Error
        </AppButton>

        <!-- Info Outlined -->
        <AppButton
          variant="secondary"
          outlined
          customClass="!border-[#0072F5] !text-[#0072F5] hover:!bg-[#0072F5]/10"
        >
          <template #icon>
            <img src="../../assets/svg/All/linear/info-circle.svg" class="w-5 h-5" />
          </template>
          Info
        </AppButton>
      </div>
    </section>
  </div>
</template>

<script setup>
import { AppButton } from "../../components";
</script>
