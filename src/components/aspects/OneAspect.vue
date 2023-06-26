<template>
  <div class="aspect">
    <img :src="aspect_image" alt="aspect image" />
    <h1>{{ aspectName }}</h1>
    <p>{{ aspectDescription }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: "OneAspect",
  props: {
    aspectImage: {
      type: String as PropType<string>,
      required: true,
    },
    aspectName: {
      type: String,
      required: true,
    },
    aspectDescription: {
      type: String,
      required: true,
    },
  },
  computed: {
    aspect_image() {
      return this.aspectImage;
    },
  },
});
</script>

<style lang="scss" scoped>
</style>

