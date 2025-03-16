const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:9091");

ws.on("open", () => {
  console.log("Connected to the server");
  ws.send("Hello Server!!");
});

ws.on("message", (data) => {
  console.log(`Message from server: ${data}`);
});
