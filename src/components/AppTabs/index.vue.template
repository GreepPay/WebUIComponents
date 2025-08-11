<template>
  <div :class="['w-full overflow-x-auto scrollbar-hide', customClass]">
    <div class="inline-flex items-center space-x-2">
      <span
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectTab(tab.key)"
        class="px-4 py-1.5 text-sm cursor-pointer whitespace-nowrap font-medium slect-none rounded-full"
        :class="
          activeTab === tab.key
            ? 'text-white bg-black'
            : 'text-very-light-gray border'
        "
      >
        {{ tab.label }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue"

  export default defineComponent({
    name: "AppTabs",
    props: {
      tabs: {
        type: Array as () => { key: string; label: string }[],
        required: true,
      },
      customClass: {
        type: String,
        default: "",
      },
      defaultTab: {
        type: String,
        default: "",
      },
    },
    emits: ["update:activeTab"],
    setup(props, { emit }) {
      const activeTab = ref(props.defaultTab || props.tabs[0]?.key || "")

      const selectTab = (key: string) => {
        activeTab.value = key
        emit("update:activeTab", key)
      }

      return { activeTab, selectTab }
    },
  })
</script>

<style scoped>
  /* Hide scrollbar */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
