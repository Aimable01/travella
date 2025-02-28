<template>
  <DashLayoutVue :active="`places`" :linear="false">
    <div class="flex w-full flex-col p-4 overflow-y-auto">
      <button @click="router.back()" class="w-fit">
        <v-icon class="" icon="fa fa-arrow-left" />
      </button>
      <h2 class="text-center text-xl font-semibold">Place: {{ name }}</h2>
      <p class="text-sm opacity-75 text-center">Address: {{ address }}</p>
      <div class="flex mt-7 w-full laptop:flex-row flex-col gap-x-2">
        <div class="laptop:w-1/2 w-full flex items-center flex-col gap-y-2">
          <h1 class="font-semibold">Images of {{ name }}</h1>
          <v-responsive
            class="w-full"
            v-if="state.images.length !== 0"
            :aspect-ratio="16 / 11"
          >
            <v-carousel
              class="h-full max-h-[500px] bg-mainblue/5 w-full"
              show-arrows-on-hover
              hide-delimiter-background
            >
              <template v-slot:prev="{ props }">
                <button
                  @click="props.onClick"
                  class="bg-mainblue/50 text-white p-[0.4em] rounded-full px-2"
                >
                  <v-icon class="-translate-y-1" icon="fa fa-chevron-left" />
                </button>
              </template>
              <template v-slot:next="{ props }">
                <button
                  @click="props.onClick"
                  class="bg-mainblue/50 text-white p-[0.4em] px-2 rounded-full"
                >
                  <v-icon class="-translate-y-1" icon="fa fa-chevron-right" />
                </button>
              </template>
              <v-carousel-item
                class=""
                v-for="(slide, i) in state.images"
                :key="i"
              >
                <div class="d-flex fill-height justify-center align-center">
                  <img :src="slide?.urls?.regular" class="object-cover" />
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-responsive>
        </div>
        <div class="laptop:w-1/2 flex w-full items-center flex-col gap-y-2">
          <h2 class="font-semibold">Map</h2>
          <iframe
            class="w-full max-w-[600px] mx-auto"
            :src="`https://maps.google.com/maps?q=${lat},${lng}&hl=es;z=14&output=embed`"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <button
        v-if="!state.isSaved"
        @click="savePlace"
        class="flex items-center justify-center gap-x-2 bg-mainblue/50 text-mainblue/100 p-2 rounded-lg mt-8 w-fit mx-auto"
      >
        <v-icon class="" icon="fa fa-heart" />
        <span>Save Place</span>
      </button>
      <button
        v-else
        @click="unSavePlace"
        class="flex items-center justify-center gap-x-2 bg-red-600/50 text-red-600/100 p-2 rounded-lg mt-8 w-fit mx-auto"
      >
        <v-icon class="" icon="fa fa-trash" />
        <span>Unsave Place</span>
      </button>
    </div>
  </DashLayoutVue>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import DashLayoutVue from "@/Layouts/DashLayout.vue";
import { onMounted, reactive } from "vue";
import { searchImages } from "@/utils/apifetches";
import { usePlaceStore } from "@/stores/places";
import { storeToRefs } from "pinia";
import type { PlaceRes } from "@/utils/types";
import { saveToLocal } from "@/utils";

const route = useRoute();
const router = useRouter();

const placeStore = usePlaceStore();
const { liked } = storeToRefs(placeStore);

const state = reactive({
  images: [] as any[],
  isSaved: false,
});

const { name, address, lat, lng } = route.query;

const getPlaceImages = async () => {
  try {
    const images = await searchImages(name as string);
    state.images = images;
    console.log(images); // Debugging: Check the API response
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};

const savePlace = () => {
  if (state.isSaved) return;
  state.isSaved = true;
  const place: PlaceRes = {
    id: route.params.id as string,
    name: name as string,
    address: address as string,
    location: {
      lat: Number(lat),
      lng: Number(lng),
    },
    images: state.images,
    price: undefined,
  };
  saveToLocal("saved", [...liked.value, place]);
  placeStore.setLiked([...liked.value, place]);
};

const unSavePlace = () => {
  if (!state.isSaved) return;
  state.isSaved = false;
  const place: PlaceRes = {
    id: route.params.id as string,
    name: name as string,
    address: address as string,
    location: {
      lat: Number(lat),
      lng: Number(lng),
    },
    images: state.images,
    price: undefined,
  };
  placeStore.setLiked(liked.value.filter((p) => p.id !== place.id));
  saveToLocal(
    "saved",
    liked.value.filter((p) => p.id !== place.id)
  );
};

onMounted(() => {
  getPlaceImages();
  const isSaved = liked.value.find((place: PlaceRes) => place.name === name);
  if (isSaved) state.isSaved = true;
});
</script>
