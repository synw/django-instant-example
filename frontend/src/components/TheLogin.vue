<template>
  <div id="form">
    <div>Username: <input type="text" v-model="form.username" /></div>
    <div>Password: <input type="password" v-model="form.password" /></div>
    <div>
      <button @click="login()">Login</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { instant } from "@/ws";

const emit = defineEmits(["loggedin"]);

const form = reactive({
  username: "adminuser",
  password: "adminpwd",
});

async function login() {
  await instant.login(form.username, form.password);
  emit("loggedin");
}
</script>
