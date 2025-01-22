<template>
  <div class="w-full flex auth min-h-screen justify-between flex-col">
    <div
      class="w-full px-11 py-5 flex items-center bg-gradient-to-r from-[#dad7dc] via-white to-[#dad7dc] sticky top-0 z-30"
    >
      <RouterLink
        to="/"
        className="flex items-center gap-2 cursor-pointer left-8 xtab:static"
      >
        <img className="w-8 h-8" src="../assets/logo.png" alt="Travella logo" />
        <h2 className="font-bold text-xl md:text-2xl text-gray-800">
          Travella
        </h2>
      </RouterLink>
    </div>
    <div class="flex flex-col items-center justify-center w-full mt-11">
      <slot />
    </div>
    <div class="px-[5%] border-t-slate-500/40 border-t-[1px] mt-11">
      <LandFooterVue />
      <CopyRightsVue />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LandFooterVue from "@/components/landing/LandFooter.vue";
import CopyRightsVue from "@/components/common/CopyRights.vue";
</script>
