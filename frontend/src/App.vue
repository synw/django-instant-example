<template>
  <div class="flex flex-col min-h-screen">
    <div class="w-full h-16 p-3 primary">
      <div class="text-2xl">Django Instant</div>
    </div>
    <div class="flex flex-row w-full h-full">
      <div class="container p-3 mx-auto background">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { initWs } from "@/ws"

onBeforeMount(() => initWs());
</script>




