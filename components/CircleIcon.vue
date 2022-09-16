<script setup lang="ts">

defineProps({
  Icon: String,
  Rounded: String,
  Size: String,
  Active: Boolean,
  CircleWidth: String,
  CircleHeight: String,
  CircleColor: {
    type: String,
    value: 'white'
  }
});

</script>

<template>
  <div class="px-1 py-1 bg-white" :class="[Rounded, CircleWidth, CircleHeight]">
    <div v-if="Icon" class="flex items-center place-content-center w-full h-full">
      <img :height="Size" :width="Size" :src="'/assets/images/' + Icon + '.svg'" />
    </div>
  </div>
</template>