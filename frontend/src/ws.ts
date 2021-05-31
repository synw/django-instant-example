import { Instant } from "djangoinstant";

const instant = new Instant(
  "http://localhost:8000",
  "wss://centrifugo2.herokuapp.com",
  true
);

export default instant;