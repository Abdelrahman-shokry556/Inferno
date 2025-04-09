# Inferno - Real-time One-Way Broadcasting Application

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Project Status](https://img.shields.io/badge/Status-Development-yellow)](https://github.com/your-org/inferno)
[![Pull Requests Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/your-org/inferno/pulls)

## Overview

Inferno is a secure, real-time, one-way broadcasting application designed to disseminate various types of messages from a central Transmitter to multiple Agents across diverse machines. This application prioritizes real-time delivery and cross-platform compatibility, enabling efficient communication for security-sensitive environments.

The core functionality includes the ability for a designated Transmitter to broadcast messages of the following types, which are instantly viewable by all connected Agents:

* **Text:** Simple textual announcements, notifications, and updates.
* **Query:** Questions or polls broadcast to Agents for informational purposes (currently one-way, no agent response mechanism included in this version).
* **Location Sharing:** Real-time dissemination of the Transmitter's geographical location.
* **Progress Bar:** Broadcasting the progress of a specific task or process.

This application is architected as a web application to ensure accessibility across a wide range of devices without requiring specific installations.

## Key Features

* **Real-time Broadcasting:** Messages are delivered to Agents instantly upon transmission.
* **Multi-Type Message Support:** Handles Text, Query, Location Sharing, and Progress Bar message formats.
* **Cross-Platform Compatibility:** Accessible through standard web browsers on any operating system.
* **Secure Communication:** Implements authentication for the Transmitter and encryption for data transmission.
* **Scalable Architecture:** Designed with scalability in mind to accommodate a growing number of Agents.
* **Intuitive User Interface:** Simple and efficient interfaces for both the Transmitter and the Agents.

## Architecture

Inferno follows a client-server architecture with WebSocket communication for real-time updates:

* **Frontend (Agent):** A web application built with modern JavaScript frameworks that are responsible for:
    * Establishing and maintaining a WebSocket connection with the backend.
    * Receiving and rendering broadcasted messages in real-time.
    * Displaying different message types appropriately (text, queries, maps for location, progress bars).
* **Backend (Transmitter & Server):** A server-side application (e.g., Node.js with Express) responsible for:
    * Authenticating the Transmitter.
    * Receiving messages from the authenticated Transmitter.
    * Broadcasting these messages to all connected Agent clients via WebSockets.
    * Managing WebSocket connections and handling disconnections.

## Technology Stack

* **Frontend:**
    * JavaScript
    * React.js / Vue.js / Angular
    * WebSockets API / Socket.IO Client

* **Backend:**
    * Node.js
    * Express.js
    * Socket.IO (for WebSocket communication)
    * JSON Web Tokens (JWT) for authentication
* **Communication Protocol:** WebSockets (WSS for secure communication)

## Security Considerations

* **Transmitter Authentication:** Only authenticated Transmitters are allowed to broadcast messages. This is implemented using JWT-based authentication.
* **Secure Communication:** All communication between clients and the server is encrypted using HTTPS/WSS to prevent eavesdropping and man-in-the-middle attacks.
* **Authorization:** (Future consideration) Role-based access control could be implemented to define different levels of broadcasting privileges.
* **Input Sanitization:** The backend sanitizes all incoming messages from the Transmitter to prevent potential injection vulnerabilities.

## Getting Started

### Prerequisites

* **Node.js and npm (or yarn):** Required for running the backend server.
* **Web Browser:** For accessing the Agent and Transmitter interfaces.

### Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-org/inferno.git](https://github.com/your-org/inferno.git)
    cd inferno
    ```

2.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

3.  **Install backend dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Configure backend environment variables:**
    Create a `.env` file in the backend directory and configure necessary variables such as:
    ```env
    PORT=3000
    JWT_SECRET=your-secret-key
    # Add other configurations as needed
    ```

5.  **Run the backend server:**
    ```bash
    npm start
    # or
    yarn start
    ```

6.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```

7.  **Install frontend dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

8.  **Configure frontend environment variables:**
    Create a `.env` file in the frontend directory and configure variables such as:
    ```env
    REACT_APP_BACKEND_URL=http://localhost:3000 # Or your deployed backend URL
    # Add other configurations as needed
    ```

9.  **Run the frontend application:**
    ```bash
    npm start
    # or
    yarn start
    ```

10. **Access the application:**
    * **Agent Interface:** Open your web browser and navigate to the URL where the frontend is running (e.g., `http://localhost:3001`).
    * **Transmitter Interface:** (Potentially a separate route or interface within the same application, depending on the UI design).

## Usage

### Broadcasting a Message (Transmitter)

1.  Navigate to the Transmitter interface.
2.  Authenticate with your credentials.
3.  Select the type of message you want to broadcast (Text, Query, Location, Progress).
4.  Enter the message content or details (e.g., text, query string, latitude/longitude, progress percentage).
5.  Click the "Broadcast" button.

The message will be instantly delivered to all connected Agents.

### Viewing Broadcasted Messages (Agent)

1.  Open the Inferno web application in your browser.
2.  The application will automatically connect to the backend server.
3.  Broadcasted messages will appear in real-time on the interface, formatted according to their type (text displayed directly, location shown on a map, progress indicated by a progress bar, etc.).


## License

Inferno is licensed under the [Apache License 2.0](LICENSE).

## Future Enhancements

* **Agent Interaction for Queries:** Allow Agents to respond to broadcasted queries.
* **User Roles and Permissions:** Implement more granular control over who can transmit and potentially view specific types of messages.
* **Message History:** Implement a mechanism for Agents to view a history of recent broadcasts.
* **Different Broadcast Channels:** Allow the creation of specific channels for broadcasting messages to subsets of Agents.
* **Enhanced Security Measures:** Explore additional security protocols and encryption methods.
* **Scalability Improvements:** Optimize the backend for handling a very large number of concurrent Agent connections.
