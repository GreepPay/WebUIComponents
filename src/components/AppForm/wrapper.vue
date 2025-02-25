<template>
  <form id="form-wrapper">
    <!--
      @slot Default slot for form elements.  All form fields should be placed here.
    -->
    <slot />
  </form>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";

/**
 * AppFormWrapper Component
 *
 * A wrapper component for forms, providing validation functionality for child components.
 * It iterates through the child components and triggers their validation methods if they exist.
 */
export default defineComponent({
  components: {},
  props: {
    /**
     * A collection of refs to child components that need validation.  The keys of the object
     * should correspond to the `ref` attribute set on the child component. The values should
     * be the component instance itself. This is a required property.
     */
    parentRefs: {
      type: Object,
      required: true,
    },
  },
  name: "AppFormWrapper",
  setup(props: any) {
    const formWrapper = ref<any>(null);

    const fieldsToValidate = ref<any[]>([]);

    watch(
      () => props.parentRefs,
      () => {
        fieldsToValidate.value = props.parentRefs;
      },
      { deep: true }
    );

    /**
     * Validates all child components with a `checkValidation` method.
     *
     * @returns {boolean} True if all child components are valid, false otherwise.
     */
    const validate = () => {
      let formIsValid = true;
      for (const key in fieldsToValidate.value) {
        if (!fieldsToValidate.value.hasOwnProperty(key)) {
          continue; // Skip if the key is from prototype chain
        }

        const componentName: any = key;
        const element = fieldsToValidate.value[componentName];
        if (element) {
          if ("checkValidation" in element) {
            element.checkValidation();
            formIsValid = formIsValid && element.validationStatus;
          }
        }
      }
      return formIsValid;
    };

    return {
      formWrapper,
      validate,
      fieldsToValidate,
    };
  },
});
</script>
