const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 9091 });

wss.on("connection", (ws) => {
  console.log("A new client connected");

  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
    ws.send("Hello, client!");
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  ws.on("ping", () => {
    console.log("Ping received");
  });

  ws.on("pong", () => {
    console.log("Pong received");
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });

  // Send a ping to the client
  ws.ping();
});

// Close the server after 10 minutes
setTimeout(() => {
  wss.close(() => {
    console.log("WebSocket server closed");
  });
}, 600000);
