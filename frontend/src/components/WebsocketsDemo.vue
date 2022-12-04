<template>
  <div class="flex justify-center">
    <div v-if="state.isConnected">
      <div class="mt-3 text-xl">Available channels</div>
      <div class="grid grid-cols-1 gap-3 mt-5 md:grid-cols-3">
        <div v-for="channel in instant.channels" :key="channel.name">
          <div>{{ channel.name }} ({{ channel.level }})</div>
          <div v-if="(msgs[channel.name].size > 0)">
            <div class="mt-3" v-for="msg in msgs[channel.name]" :key="msg.date.toLocaleString()">
              {{ msg.date.toLocaleString() }}:
              {{ msg.msg }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="btn" v-else @click="connect()">Connect</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { instant } from "@/ws";
import { Message } from "djangoinstant";

const state = reactive({
  isConnected: false,
});
const msgs = reactive({
  public: new Set<Message>(),
  $users: new Set<Message>(),
  $group1: new Set<Message>(),
});

function onMessage(msg: Message) {
  msgs[msg.channelName].add(msg)
}

async function connect() {
  await instant.onReady; // make sure initialization is completed
  console.log("Connecting");
  instant.onMessage(onMessage);
  await instant.connect();
  state.isConnected = true;
  console.log("End: connected");
}
</script>

