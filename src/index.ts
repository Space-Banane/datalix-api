// Starting template for Applications wanting to connect to the Datalix API reading live KVM data using TypeScript and WebSockets

import WebSocket from 'ws';

const WS_URL = process.env.WS_URL!
const WS_TOKEN = process.env.WS_TOKEN!
const SERVICE_ID = process.env.SERVICE_ID!

const ws = new WebSocket(WS_URL);

ws.on('open', function open() {
    ws.send(JSON.stringify({token: WS_TOKEN, serviceid: SERVICE_ID}));
});

ws.on('message', function incoming(data) {
  const message = data.toString();

  if (message === "Ping") {
    ws.send("Pong");
  } else {
    const parsed = JSON.parse(message);

    if (parsed) {
        const cpu = parsed.cpu.toFixed(2);
        const mem = parsed.mem / 1024 / 1024 / 1024; // GB
        const nodecpu = parsed.nodecpu.toFixed(2);
        const netin = parsed.netin / 1024 / 1024 / 1024; // GB
        const netout = parsed.netout / 1024 / 1024 / 1024; // GB

        console.log({cpu, mem, nodecpu, netin, netout});
    }
  }
});

ws.on('error', function error(err) {
    console.error('WebSocket error: ' + err);
});

ws.on('close', function close() {
    console.log('WebSocket closed');
});

ws.on('unexpected-response', function unexpectedResponse(request, response) {
    console.error('WebSocket unexpected response: ' + response);
});