<template>
  <div id="form">
    <div>Username: <input type="text" v-model="form.username" /></div>
    <div>Password: <input type="password" v-model="form.password" /></div>
    <div>
      <button @click="login()">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import instant from "@/ws";

export default defineComponent({
  emits: ["loggedin"],
  // eslint-disable-next-line
  setup(props, { emit }) {
    const form = reactive({
      username: "",
      password: "",
    });

    async function login() {
      await instant.login(form.username, form.password);
      emit("loggedin");
    }

    return {
      login,
      form,
    };
  },
});
</script>

<style scoped>
#form > div {
  margin-top: 1em;
}
</style>

