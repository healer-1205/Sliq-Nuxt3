<template>
  
  <div class="grid w-full gap-0 place-items-center">
  <nav class="grid w-full items-center place-content-around lg:w-5/6 grid-cols-2 gap-0 h-12 py-2 px-2">
    
    <div class="justify-self-start self-center">

      <NuxtLink to="/" >
        <img class="float-left w-9 h-9" src="/assets/images/logo-small.svg" />
        <div class="hidden lg:block float-left">
          <span class="text-white font-bold md:h-8 md:pl-2 align-middle">SLIQ.APP</span>
        </div>
      </NuxtLink>

    </div>
    <div class="justify-self-end self-center">

      <div v-show="!selectLocaleState" id="mobileNav" class="lg:hidden">
        <NuxtLink to="/user/login" >
            <div class="float-left align-middle pl-1 pr-2">
              <Button Title="Sign up / Login" Rounded="rounded-full"/>
            </div>
        </NuxtLink>
      
        <div @click="selectLocaleState = !selectLocaleState" class="cursor-pointer float-left align-middle pl-1 pr-0">
          <Button :Title="$i18n.locale.toUpperCase()" Rounded="rounded-full"/>
        </div>
      </div>
      
      <div v-show="selectLocaleState" id="localeNav">

        <a class="cursor-pointer" key="el" @click.prevent.stop="$i18n.setLocale('el')">
          <div class="float-left align-middle pl-1 pr-2">
            <CircleIcon Icon="icons/gr-flag" CircleWidth="w-8" CircleHeight="h-8" Size="20" Rounded="rounded-full" :Active="$i18n.locale == 'el'"/>
          </div>
        </a>

        <a class="cursor-pointer" key="en" @click.prevent.stop="$i18n.setLocale('en')">
          <div class="float-left align-middle pl-1 pr-2">
            <CircleIcon Icon="icons/uk-flag" CircleWidth="w-8" CircleHeight="h-8" Size="20" Rounded="rounded-full" :Active="$i18n.locale == 'en'"/>
          </div>
        </a>

        <div @click="selectLocaleState = !selectLocaleState" class="cursor-pointer float-left align-middle pl-1 pr-0">
          <CircleIcon Icon="icons/x" Size="8" CircleWidth="w-8" CircleHeight="h-8" Rounded="rounded-full"/>
        </div>

      </div>

      <div v-show="!selectLocaleState" class="hidden align-middle lg:block">
      
        <NuxtLink to="/panel" >
          <div class="float-left md:h-8 md:px-4 align-middle text-white font-bold text-xs">
            Panel
          </div>
        </NuxtLink>
        
        <NuxtLink to="/support" >
          <div class="float-left md:h-8 md:px-4 align-middle text-white font-bold text-xs">
            Support
          </div>
        </NuxtLink>
        
        <NuxtLink to="/faq" >
          <div class="float-left md:h-8 md:px-4 align-middle text-white font-bold text-xs">
            FAQ
          </div>
        </NuxtLink>

        <NuxtLink to="/terms" >
          <div class="float-left md:h-8 md:px-4 align-middle text-white font-bold text-xs">
            Terms & Policy
          </div>
        </NuxtLink>

        <NuxtLink to="/user/login" >
          <div class="float-left align-middle pl-1 pr-2">
            <Button Title="Sign up / Login" Rounded="rounded-lg"/>
          </div>
        </NuxtLink>
        
        <div @click="selectLocaleState = !selectLocaleState" class="cursor-pointer float-left align-middle pl-1">
          <Button :Title="$i18n.locale.toUpperCase()" Rounded="rounded-lg" />
        </div>
      
      </div>

    </div>
  
  </nav>
  </div>

</template>

<script>
export default {
  data() {
      return {
        selectLocaleState: false
      }
  },
  methods: {
    toggleLocale () {
      
      if(this.selectLocaleState == true) {
        
        this.$anime({
          target: '#localeNav',
          opacity: [1, 0],
          duration: 2000
        });

        this.$anime({
          target: '#mobileNav',
          opacity: [0, 1],
          duration: 2000
        });


    } else {

        this.$anime({
          target: '#localeNav',
          opacity: [0, 1],
          duration: 2000
        });

        this.$anime({
          target: '#mobileNav',
          opacity: [1, 0],
          duration: 2000
        });

    }

  this.selectLocaleState = !this.selectLocaleState;

  console.log("Clicked language!: " + this.selectLocaleState);
  }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>