# E-Commerce App

This is an e-commerce web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack with Tailwind CSS for styling. It allows users to browse products, add them to cart, and complete the purchase process.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (sign up, login, logout)
- Product browsing
- Product search
- Product filtering
- Adding/removing items to/from cart
- Checkout process
- Order history

## Technologies Used

- **Frontend**:
  - React.js
  - Redux (for state management)
  - React Router (for routing)
  - Axios (for HTTP requests)
  - Tailwind CSS (for styling)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for database)
  - Mongoose (ODM for MongoDB)
  - JSON Web Tokens (JWT) for authentication
  - bcrypt.js (for password hashing)

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed locally or remotely
- Internet connection for accessing external resources (like CDN for Tailwind CSS)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ubaidLM/e-commerce-app.git
```

2. Navigate to the project directory:

```bash
cd e-commerce-app
```

3. Install dependencies for both frontend and backend:

```bash
cd client
npm install
cd ../server
npm install
```

4. Set up environment variables:
   - In the `server` directory, create a `.env` file and define the following variables:
     ```
     PORT=8000
     MONGODB_URI=your-mongodb-connection-string
     JWT_SECRET=your-jwt-secret
     ```
   Replace `your-mongodb-connection-string` with your MongoDB connection string and `your-jwt-secret` with your JWT secret key.

## Usage

1. Start the backend server:

```bash
cd server
npm start
```

2. Start the frontend development server:

```bash
cd client
npm start
```

3. Open your browser and visit `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```