<template>
  <component :is="Teleport" to="body">
    <transition name="fade" appear>
      <div
        :class="`fixed top-0 w-screen h-screen bg-black/30 flex flex-col overflow-y-hidden items-center mdlg:justify-center! justify-end ${customClass}`"
        style="z-index: 9999999999999999"
        @click="closeModal()"
      >
        <div
          class="relative w-full flex flex-col mdlg:justify-center! justify-end items-center mdlg:h-[85%]! h-full overflow-y-auto"
        >
          <div
            class="w-full flex flex-col h-full mdlg:justify-center! justify-end items-center"
          >
            <div
              class="w-full bg-white rounded-t-[20px] min-h-[100px] flex flex-col relative"
              @click.stop="null"
            >
              <!-- Top section -->
              <div
                class="w-full flex flex-row items-center justify-between px-4 py-4 sticky top-0 bg-white rounded-t-[20px]"
              >
                <app-header-text class="!text-lg !text-left">
                  {{ title }}
                </app-header-text>

                <app-icon
                  name="close"
                  customClass="!h-[20px]"
                  @click="closeModal()"
                />
              </div>

              <!-- Content -->
              <slot />
              <!--
               * @slot -  Content to be displayed within the modal.
               -->
            </div>
          </div>
        </div>
      </div>
    </transition>
  </component>
</template>
<script lang="ts">
  import { Teleport as teleport_, TeleportProps, VNodeProps } from "vue"

  const Teleport = teleport_ as {
    new (): {
      $props: VNodeProps & TeleportProps
    }
  }

  import { AppHeaderText } from "../AppTypography"
  import AppIcon from "../AppIcon"

  /**
   *  Modal component that displays content in an overlay.
   */
  export default {
    components: {
      AppHeaderText,
      AppIcon,
    },
    name: "AppModal",
    props: {
      /**
       * Determines whether the modal can be closed by clicking outside or pressing the close icon.
       */
      canClose: {
        type: Boolean,
        default: true,
      },
      /**
       * Function to execute when the modal is closed.
       * @required
       */
      close: {
        type: Function,
        required: true,
      },
      /**
       * Custom CSS classes to apply to the modal container.
       */
      customClass: {
        type: String,
        default: "",
      },
      /**
       * Title of the modal, displayed in the header.
       */
      title: {
        type: String,
        default: "",
      },
    },
    setup(props: any) {
      const closeModal = () => {
        if (props.canClose) {
          props.close()
        }
      }

      return {
        closeModal,
        Teleport,
      }
    },
  }
</script>
