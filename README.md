# Datalix API - KVM Data Client/Examples

A starting template for applications connecting to the Datalix API to read live KVM data using TypeScript and WebSockets.

## Features

- WebSocket connection to Datalix API
- Real-time KVM data streaming
- TypeScript support

## Prerequisites

- Node.js v22 (tested)
- TypeScript
- pnpm

## Installation

```bash
pnpm i
pnpm dev
```

## Configuration

Create a `.env` file in the root directory:

```env
WS_URL="wss://livedata.datalix.de/"
WS_TOKEN=""
SERVICE_ID=""
```

## Usage

You can copy parts of the code to your own application or use this repository as a starting point for your own project.
Be aware that the code is a minimal example and may need to be adapted to your specific use case.


## Documentation

For detailed documentation about the Datalix API, visit our [documentation portal](https://docs.datalix.com).

## License

MIT
