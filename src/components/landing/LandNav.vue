<template>
  <div
    class="flex w-full bg-mainwhite sticky top-0 z-50 items-center h-[80px] justify-between"
  >
    <div
      @click="toggleMenu"
      class="z-50 top-5 xtab:hidden absolute right-3 cursor-pointer"
    >
      <v-icon icon="fa fa-bars" />
    </div>
    <div
      @click="toggleMenu"
      :class="`flex top-0 left-0 bottom-0 fixed right-0 xtab:hidden ${
        !isMobile && 'hidden'
      }`"
    ></div>
    <div
      :class="`flex xtab:static absolute xtab:flex-row flex-col items-center justify-between w-full bg-inherit py-11 left-0 ${
        isMobile ? 'top-0' : '-top-[1000px]'
      } xtab:py-0 duration-500 px-[5%]`"
    >
      <RouterLink
        to="/"
        className="flex items-center gap-2 cursor-pointer fixed left-8 top-4 xtab:static mt-4"
      >
        <img
          className="w-8 h-8"
          src="../../assets/logo.png"
          alt="Travella logo"
        />
        <h2 className="font-bold text-xl md:text-2xl text-gray-800">
          Travella
        </h2>
      </RouterLink>
      <div
        class="flex items-center xtab:flex-row flex-col xtab:gap-y-0 gap-y-3 xtab:mt-0 mt-4"
      >
        <button @click="scrollToSection('about')" class="">About</button>
        <button @click="scrollToSection('services')" class="xtab:ml-11">
          Services
        </button>
        <button @click="scrollToSection('pricing')" class="xtab:ml-11">
          Pricing
        </button>
        <button @click="scrollToSection('contact')" class="xtab:ml-11">
          Contact
        </button>
      </div>
      <div
        class="flex items-center flex-col xtab:flex-row xtab:gap-y-0 gap-y-4 xtab:mt-0 mt-3"
      >
        <a href="/login" class=""> Login </a>
        <a
          href="/register"
          class="xtab:ml-6 px-4 py-2 rounded-3xl bg-mainblue text-white"
        >
          Register
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isMobile = ref(false);

const toggleMenu = () => {
  isMobile.value = !isMobile.value;
};

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
  }
};
</script>
