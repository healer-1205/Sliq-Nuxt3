<template>
  <div class="inline-flex items-center justify-center h-8 px-2 py-4 bg-white" :class="Rounded">
    <div v-if="Icon" class="flex items-center w-7 h-full">
      <img src="~/assets/images/icons/login-user.svg" />
    </div>
    <p class="font-bold leading-relaxed text-2xs text-gray-700">{{ Title }}</p>
  </div>
  
</template>

<script>
export default {
  props: {
    Title: String,
    Icon: String,
    Rounded: String
  }
}
</script>