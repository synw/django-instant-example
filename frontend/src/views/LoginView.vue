<template>
  <div class="flex items-center justify-center w-full h-full">
    <the-login @loggedin="loginUser()"></the-login>
  </div>
</template>

<script setup lang="ts">
import TheLogin from '@/components/TheLogin.vue';
import router from '@/router';
import { isLoggedIn } from '@/state';

function loginUser() {
  isLoggedIn.value = true;
  router.push('/');
}
</script>