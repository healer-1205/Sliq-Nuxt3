<script lang="ts" setup></script>

<template>
  <div>
    <HeaderNavigation class="absolute z-10" />
    <HeaderTenant class="absolute z-10" />
    <div id="header" class="relative bg-[#140034] h-96 w-screen overflow-hidden">
        <img class="absolute top-0 right-0" src="/assets/images/header-top-right.svg" />
        <img class="absolute bottom-0 left-0" src="/assets/images/header-top-left.svg" />
        <img id="cloudLeftBack" class="absolute bottom-0 -left-72 overflow-hidden" src="/assets/images/header-cloud-back-left.svg" />
        <img id="cloudLeftFront" class="absolute -left-80 -bottom-0 overflow-hidden" src="/assets/images/header-cloud-front-left.svg" />
        <img id="cloudRightBack" class="absolute bottom-0 -right-72 overflow-hidden" src="/assets/images/header-cloud-back-right.svg" />
        <img id="cloudRightFront" class="absolute -right-80 -bottom-0 overflow-hidden" src="/assets/images/header-cloud-front-right.svg" />
    </div>
    <div>
      <slot class="absolute z-20 h-full" />
    </div>
    <BottomNavigation class="absolute z-30" />
  </div>
</template>
