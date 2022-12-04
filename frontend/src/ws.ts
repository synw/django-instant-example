import { useInstant } from "djangoinstant";
//import { Instant } from "@/packages/djangoinstant";
//import { useInstant } from "./packages/djangoinstant/client";

const instant = useInstant();

async function initWs() {
  await instant.init(
    "http://localhost:8000",
    "ws://localhost:8427",
    true)
}

export { instant, initWs }