<template>
  <websockets-demo></websockets-demo>
</template>

<script setup lang="ts">
import router from "@/router";
import { isLoggedIn } from "@/state";
import { onBeforeMount } from "vue";
import WebsocketsDemo from "@/components/WebsocketsDemo.vue";

onBeforeMount(() => {
  if (!isLoggedIn.value == true) {
    router.push("/login")
  }
})
</script>
