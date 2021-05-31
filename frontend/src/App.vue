<template>
  <h1>Django Instant example</h1>
  <websockets-demo></websockets-demo>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import { initState, isLoggedIn } from "@/state";
import WebsocketsDemo from "./components/WebsocketsDemo.vue";

export default defineComponent({
  name: "App",
  components: {
    WebsocketsDemo,
  },
  setup() {
    onBeforeMount(() => {
      initState();
      console.log("Is logged in", isLoggedIn.value);
    });
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
