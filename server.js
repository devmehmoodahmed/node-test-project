const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authConfig = require('./config/authConfig.js');
const routes = require('./routes');

// Load environment variables from .env file
dotenv.config();

const app = express();

// CORS options
const corOptions = {
  origin: 'https://localhost:8081'
};

// Middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use('/api', routes);

// Testing API
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Test Project' });
});

// Port
const PORT = process.env.PORT || 8080;

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
