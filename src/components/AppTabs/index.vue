<template>
  <div :class="['w-full overflow-x-auto scrollbar-hide', customClass]">
    <div :class="['flex items-center h-fit w-full', tabsClass]">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectTab(tab.key)"
        :class="[getTabClass(tab.key), tabClass, 'flex-1 text-center mx-1']"
      >  
        <span class="flex items-center justify-center gap-2 whitespace-nowrap">
          <!-- Prefix Icon -->
          <app-icon 
            v-if="prefixIcon" 
            :name="prefixIcon" 
            :customClass="prefixIconClass" 
          />
          
          <!-- Tab Label -->
          <span> {{ tab.label }} </span>

          <!-- Suffix Icon or Default Icon -->
          <app-icon v-if="suffixIcon" :name="suffixIcon" :customClass="iconClass" />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { AppNormalText } from "../AppTypography";
import AppIcon  from "../AppIcon";

export default defineComponent({
  name: "AppTabs",
  components: { AppNormalText, AppIcon },
  props: {
    tabs: {
      type: Array as () => { key: string; label: string; icon?: string }[],
      required: true,
    },
    type: {
      type: String as () => "badge" | "boxed" | "default",
      default: "badge",
    },
    customClass: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    tabsClass: {
      type: String,
      default: "", 
    },
    prefixIcon: {
      type: String,
      default: null,
    }, 
    iconClass: {
      type: String,
      default: null,
    },
    prefixIconClass: {
      type: String,
      default: null,
    },
    tabClass: {
      type: String,
      default: "",
    },
    suffixIcon: {
      type: String,
      default: null,
    },
    defaultTab: {
      type: String,
      default: "",
    },
    distribute: { 
      type: Boolean,
      default: true,
    },
    activeTab: {
      type: String,
      default: "",
    }
  },
  emits: ["update:activeTab"],
  setup(props, { emit }) {
    const activeTab = ref(props.activeTab || props.defaultTab || props.tabs[0]?.key || "");

    // Watch for changes in activeTab prop
    watch(() => props.activeTab, (newVal) => {
      if (newVal && newVal !== activeTab.value) {
        activeTab.value = newVal;
      }
    });

    const selectTab = (key: string) => {
      activeTab.value = key;
      emit("update:activeTab", key);
    };

    const getTabClass = (tabKey: string) => {
      const baseClass = "px-4 py-2 cursor-pointer hover:text-black whitespace-nowrap flex items-center justify-center transition-colors duration-200";

      if (props.type === "default") {
        return [
          baseClass,
          activeTab.value === tabKey
            ? "!font-medium !text-black border-b-2 border-black"
            : "!text-veryLightGray",
        ];
      }

      if (props.type === "badge") {
        return [
          baseClass,
          activeTab.value === tabKey
            ? "!font-medium !text-white !bg-black rounded-full !outline-[1.5px] !outline-black"
            : "!text-veryLightGray border-[1.5px] rounded-full !font-medium",
        ];
      }

      if (props.type === "boxed") {
        return [
          baseClass,
          activeTab.value === tabKey
            ? "!font-medium !text-black border border-black"
            : "!text-veryLightGray border border-gray-300 !font-medium bg-white",
          props.distribute ? 'flex-1' : ''
        ];
      }

      if (props.type === "underline") {
        return [
          baseClass,
          activeTab.value === tabKey
            ? "!font-medium !text-black border-b-2 border-black"
            : "!text-very-light-gray",
        ];
      }

      return baseClass;
    };

    return { activeTab, selectTab, getTabClass };
  },
});
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>