<template>
  <div class="aspect">
    <h1>You Have Aspects</h1>
    <div v-for="aspect in all_aspects" :key="aspect.id">
      <oneAspect :aspectImage="aspect.image" :aspectName="aspect.name" :aspectDescription="aspect.description">
      </oneAspect>
    </div>
  </div>
</template>


/* eslint-disable @typescript-eslint/ban-ts-comment */
<script lang="ts">
import all_aspects from "@/logic/aspects/interfaceAspect";
import oneAspect from "@/components/aspects/OneAspect.vue";

export default {
  name: "youHaveAspects",
  components: {
    oneAspect
  },
  computed: {
    all_aspects() {
      return all_aspects;
    }
  }
};
</script>
