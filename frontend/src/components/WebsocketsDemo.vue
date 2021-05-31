<template>
  <div>
    <div v-if="isLoggedIn === false">
      <the-login @loggedin="isLoggedIn = true"></the-login>
    </div>
    <div v-else>
      <div v-if="state.isConnected">
        <p>Available channels:</p>
        <div
          v-for="channel in instant.channels"
          :key="channel.name"
        >{{ channel.name }} ({{ channel.level }})</div>
        <h3>Messages</h3>
        <h4>Public</h4>
        <div v-for="msg in msgs.public" :key="msg.date.toLocaleString()">
          {{ msg.date.toLocaleString() }}:
          {{ msg.msg }}
        </div>
        <h4>Users</h4>
        <div v-for="msg in msgs.users" :key="msg.date.toLocaleString()">
          {{ msg.date.toLocaleString() }}:
          {{ msg.msg }}
        </div>
        <h4>Group 1</h4>
        <div v-for="msg in msgs.group1" :key="msg.date.toLocaleString()">
          {{ msg.date.toLocaleString() }}:
          {{ msg.msg }}
        </div>
      </div>
      <button v-else @click="connect()">Connect</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import instant from "@/ws";
import TheLogin from "@/components/TheLogin.vue";
import { isLoggedIn } from "@/state";
import { Message } from "djangoinstant";

export default defineComponent({
  components: {
    TheLogin,
  },
  setup() {
    const state = reactive({
      isConnected: false,
    });
    const msgs = reactive({
      public: new Set<Message>(),
      users: new Set<Message>(),
      group1: new Set<Message>(),
    });

    function onMessage(msg: Message) {
      switch (msg.channelName) {
        case "public":
          msgs.public.add(msg);
          break;
        case "$users":
          msgs.users.add(msg);
          break;
        case "$group1":
          msgs.group1.add(msg);
          break;
        default:
          throw new Error(`Unknown channel ${msg.channelName}`)
      }
    }

    async function connect() {
      console.log("Connecting");
      instant.onMessage = onMessage;
      await instant.connect();
      state.isConnected = true;
      console.log("End: connected");
    }

    onMounted(() => {
      if (isLoggedIn.value === true) {
        console.log("Getting connection token");
        instant.get_token();
      }
    });

    return {
      state,
      connect,
      isLoggedIn,
      instant,
      msgs
    };
  },
});
</script>

<style scoped>
#form > div {
  margin-top: 1em;
}
</style>

