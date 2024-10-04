
# Real-Time Device Tracker

This is a real-time device tracking application built using Node.js, Express, Socket.IO, Leaflet, and EJS. It tracks connected devices' locations and updates their positions on a live map.

## Features

- **Real-time tracking:** Devices send their location coordinates to the server in real-time.
- **Dynamic map:** A Leaflet.js map is used to visualize the devices' locations.
- **Multiple devices:** Each device is identified by a unique socket ID, and their location is dynamically updated on the map.
- **Disconnection handling:** When a device disconnects, its marker is removed from the map.

## Tech Stack

- **Node.js** for server-side scripting
- **Express** for handling HTTP requests
- **Socket.IO** for real-time communication between server and client
- **Leaflet.js** for map integration
- **EJS** for rendering views


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fuyalasmit/RealTime-Device-Tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd RealTime-Device-Tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the server:
   ```bash
   node app.js
   ```

5. Open your browser and go to `http://localhost:3000` to see the real-time tracking in action.

## How It Works

1. When a client connects, it sends its geolocation coordinates to the server.
2. The server broadcasts these coordinates to all connected clients using Socket.IO.
3. If a user disconnects, their marker is removed from the map.

## Dependencies

- **Express**: For serving the application and static files.
- **EJS**: For rendering dynamic content on the server side.
- **Socket.IO**: For enabling real-time bidirectional communication.
- **Leaflet.js**: For map rendering and geolocation visualization.

## License

This project is licensed under the *ISC License*.
