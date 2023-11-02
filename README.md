# TaskManagment-Chakra-UI


# Task Management System

## Introduction

This Task Management System (TMS) is a modern, responsive web application designed to help teams and individuals manage their tasks efficiently. Built with the latest front-end technologies, TMS offers an intuitive user interface, powered by Chakra UI, to ensure a seamless user experience.

## Features

- **Task Dashboard:** View all tasks at a glance, with options to filter by priority or completion status.
- **Create Tasks:** Add new tasks with detailed descriptions, and mark them as priority if needed.
- **Real-time Updates:** Using JSON Server as a mock backend, see changes reflected across all clients in real time.
- **Profile Management:** View and edit user profiles, with task history and account information.

## Technologies

- **React.js:** A JavaScript library for building user interfaces.
- **Chakra UI:** A simple, modular, and accessible component library that gives you the building blocks to build your React applications.
- **JSON Server:** Full fake REST API for testing and prototyping.

## Setup and Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git](https://github.com/davislyu/TaskManagment-Chakra-UI
cd your-repo-name

# Install dependencies
npm install

# Start the development server for React
npm run dev

# Start JSON Server
npx json-server --watch ./data/db.json --port 3000
```

Your API will be available at `http://localhost:3000`, and the React app will be available at `http://localhost:5173`.

## Running the Project

To run both the frontend and the mock backend concurrently, you can use:

```bash
npm start
```

This command is set up in your `package.json` to run both servers in tandem.

## Contribution

Your contributions are always welcome! Please follow the next steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.
