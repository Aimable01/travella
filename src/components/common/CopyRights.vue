<template>
  <div
    class="flex w-full tablet:flex-row flex-col items-center justify-center gap-x-3 p-2"
  >
    <p class="text-sm text-center">
      &copy; {{ currentYear }} All rights reserved.
    </p>
    <a
      href="https://github.com/aimable01"
      target="_blank"
      rel="noopener noreferrer"
      class="text-sm text-blue-500 hover:text-blue-700 transition-colors"
    >
      Aimable KWIZERA
    </a>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

// Get the current year dynamically
const currentYear = ref<number>(0);

onMounted(() => {
  currentYear.value = new Date().getFullYear();
});
</script>
