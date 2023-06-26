<template>
  <section id="main">
    <youHaveAspects></youHaveAspects>
  </section>
</template>

<script lang="ts">
import youHaveAspects from "@/components/aspects/YouHaveAspects.vue";

export default {
  name: "HomeView",
  components: {
    youHaveAspects
  }
};
</script>
