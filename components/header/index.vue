<template>
  <div>
    <nav
      class="px-6 py-8 bg-indigo-600 md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center">
          <img src="~/assets/images/header/logo-small.svg" alt="Logo" />
          <p
            class="
              text-xl
              font-bold
              text-gray-100
              md:text-2xl
              hover:text-indigo-400
            "
          >
            {{ $t("header.logo") }}
          </p>
        </NuxtLink>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        "
      >
        <li class="text-gray-100 hover:text-indigo-400">
          <NuxtLink to="/panel">{{ $t("header.panel") }}</NuxtLink>
        </li>
        <li class="text-gray-100 hover:text-indigo-400">
          <NuxtLink to="/support">{{ $t("header.support") }}</NuxtLink>
        </li>
        <li class="text-gray-100 hover:text-indigo-400">
          <NuxtLink to="/faq">{{ $t("header.faq") }}</NuxtLink>
        </li>
        <li class="text-gray-100 hover:text-indigo-400">
          <NuxtLink to="/policy">{{ $t("header.terms&policy") }}</NuxtLink>
        </li>
        <li>
          <div class="relative">
            <!-- Dropdown toggle button -->
            <form>
              <select id="locale-select" v-model="$i18n.locale">
                <option value="en">EN</option>
                <option value="gr">GR</option>
              </select>
            </form>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let showMenu = ref(false);
    let show = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, show, toggleNav };
  },
};
</script>