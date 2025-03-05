<template>
  <button
    :class="[
      'focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200',
      'flex flex-row items-center justify-center gap-2',
      variant === 'text' ? 'px-[2px]' : 'rounded-[999px] px-4 py-2',
      outlined ? 'border-2' : '',
      disabled ? 'cursor-not-allowed' : '',
      {
        // Primary variant
        'bg-[#0A141E] text-white hover:bg-[#0A141E]/90 active:bg-[#0A141E]/80 disabled:opacity-40 focus:ring-[#0A141E]/30':
          variant === 'primary' && !outlined,
        'border-[#0A141E] bg-transparent text-[#0A141E] hover:bg-[#0A141E]/10 active:bg-[#0A141E]/20 disabled:opacity-40 focus:ring-[#0A141E]/30':
          variant === 'primary' && outlined,

        // Secondary variant
        'bg-[#1F8F69] text-white hover:bg-[#1F8F69]/90 active:bg-[#1F8F69]/80 disabled:opacity-40 focus:ring-[#1F8F69]/30':
          variant === 'secondary' && !outlined,
        'border-[#1F8F69] bg-transparent text-[#1F8F69] hover:bg-[#1F8F69]/10 active:bg-[#1F8F69]/20 disabled:opacity-40 focus:ring-[#1F8F69]/30':
          variant === 'secondary' && outlined,

        // Primary White variant
        'bg-white text-[#0A141E] hover:bg-white/90 active:bg-white/80 disabled:opacity-40 focus:ring-white/30':
          variant === 'primary-white' && !outlined,
        'border-white bg-transparent text-white hover:bg-white/10 active:bg-white/20 disabled:opacity-40 focus:ring-white/30':
          variant === 'primary-white' && outlined,

        // Text variant
        'bg-transparent text-[#0A141E] hover:underline active:text-[#0A141E]/80 disabled:opacity-40 disabled:no-underline focus:ring-[#0A141E]/30':
          variant === 'text' && !outlined,
        'border-[#0A141E] bg-transparent text-[#0A141E] hover:bg-[#0A141E]/10 active:bg-[#0A141E]/20 disabled:opacity-40 focus:ring-[#0A141E]/30':
          variant === 'text' && outlined,

        // Loading state
        'relative !cursor-wait': loading,
        'before:absolute before:inset-0 before:rounded-[999px] before:bg-current before:opacity-10': loading && variant !== 'text',
      },
      customClass
    ]"
    :disabled="disabled || loading"
  >
    <div v-if="loading" class="absolute left-1/2 -translate-x-1/2">
      <img 
        src="../../assets/svg/All/linear/refresh-2.svg" 
        class="w-5 h-5 animate-spin"
        :class="{'opacity-40': disabled}"
      />
    </div>
    <div :class="{'invisible': loading}">
      <slot name="icon" />
    </div>
    <div :class="{'invisible': loading}">
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
/**
 *  Button Component
 *
 *  This component is a reusable button with customizable styling.
 */
interface Props {
  /**
   * Button variant
   * @values 'primary', 'secondary', 'primary-white', 'text'
   */
  variant?: 'primary' | 'secondary' | 'primary-white' | 'text';
  /**
   * Whether the button is outlined
   */
  outlined?: boolean;
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  /**
   * Whether the button is in loading state
   */
  loading?: boolean;
  /**
   * Additional custom classes
   */
  customClass?: string;
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  outlined: false,
  disabled: false,
  loading: false,
  customClass: '',
});
</script>
