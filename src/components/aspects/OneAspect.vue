<template>
  <div class="aspect">
    <img :src="aspect_image" alt="aspect image" />
    <h1>{{ aspect_name }}</h1>
    <p>{{ aspect_description }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "OneAspect",
  props: {
    aspectImage: String,
    aspectName: String,
    aspectDescription: String,
  },
  computed: {
    aspect_image() {
      return require(this.aspectImage);
    },
    aspect_name() {
      return this.aspectName;
    },
    aspect_description() {
      return this.aspectDescription;
    },
  },
};

</script>

<style lang="scss" scoped>
</style>

