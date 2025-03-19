<template>
  <span
    contenteditable="true"
    :class="`focus:!outline-0`"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @keypress="isNumber"
    ref="editable"
    :data-placeholder="placeholder"
  >
  </span>
</template>

<script lang="ts">
import { computed, watch } from "vue";
import { ref, defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "AppContentEditable",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    defaultValue: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    customClass: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue", "contentChanged"],
  setup(props, context) {
    const spanRef = ref();

    const editable = ref<HTMLElement | null>(null);

    // Track the actual content
    const content = ref(props.defaultValue);

    const formatNumber = (number: string) => {
      if (!number) return "";

      const num = number.replace(/[^0-9]/g, ""); // Remove non-numeric characters
      if (!num) return "";

      return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    onMounted(() => {
      if (props.defaultValue) {
        let formattedValue = props.defaultValue;
        if (props.type === "number" || props.type === "tel") {
          formattedValue = formatNumber(props.defaultValue);
        }
        editable.value!.textContent = formattedValue;
        content.value = formattedValue;
      } else {
        // editable.value!.textContent = props.placeholder;
        // isPlaceholderVisible.value = true;
      }
    });

    const handleInput = (event: any) => {
      let innerText = event.target.innerText;
      // if (props.type === "number" || props.type === "tel") {
      //   innerText = formatNumber(innerText);
      // }

      context.emit("update:modelValue", innerText);
      content.value = innerText;
      // event.target.innerText = innerText; // Update the displayed text immediately
      context.emit("contentChanged", innerText);
    };

    const handleFocus = () => {
      if (content.value == "\n") {
        // isPlaceholderVisible.value = true;
        // editable.value!.textContent = "";
      }
    };

    const handleBlur = () => {
      if (content.value == "\n") {
        // isPlaceholderVisible.value = true;
        // editable.value!.textContent = props.placeholder;
      }
    };

    const isNumber = (evt: any) => {
      if (props.type != "tel" && props.type != "number") return true;

      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    };

    return {
      spanRef,
      editable,
      handleInput,
      handleFocus,
      handleBlur,
      isNumber,
    };
  },
});
</script>
<style scoped>
[contenteditable]:empty:before {
  content: attr(data-placeholder);
  color: #999999;
  pointer-events: none;
}
</style>
