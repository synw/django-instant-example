import { ref } from "@vue/reactivity";
import { VueCookieNext } from "vue-cookie-next";

const isLoggedIn = ref(false);

function initState(): void {
  if (VueCookieNext.isCookieAvailable("csrftoken")) {
    isLoggedIn.value = true
  }
}

export { initState, isLoggedIn }