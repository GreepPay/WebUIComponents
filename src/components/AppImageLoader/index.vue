<template>
  <div id="" :class="`relative ${customClass} blend-in`">
    <img
      class="absolute top-0 left-0 w-full"
      :src="imageUrl"
      style="
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      "
      :style="`background-image:url(${imageUrl});`"
    />
    <slot />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted, watch } from "vue"

  export default defineComponent({
    name: "AppImageLoader",
    props: {
      photoUrl: {
        type: String,
        required: true,
      },
      customClass: {
        type: String,
        default: "",
      },
      customStyle: {
        type: String,
        default: "",
      },
    },
    setup(props) {
      const image = ref("")
      const imageUrl = ref("")

      const setImage = () => {
        imageUrl.value = props.photoUrl || ""

        const highResImage = new Image()

        highResImage.onload = function () {
          image.value = imageUrl.value
        }

        highResImage.src = imageUrl.value
      }

      watch(props, () => {
        setImage()
      })

      onMounted(() => {
        setImage()
      })

      return {
        image,
        imageUrl,
      }
    },
  })
</script>
<style scoped>
  .blend-in {
    animation: fadein 0.15s;
    -moz-animation: fadein 0.15s; /* Firefox */
    -webkit-animation: fadein 0.15s; /* Safari and Chrome */
    -o-animation: fadein 0.15s; /* Opera */
  }
</style>
