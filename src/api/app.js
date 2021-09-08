const express = require('express');
const cors = require('cors');

const app = express();

// Enable Cross Origin Resource Sharing to all origins by default
app.use(cors());

// Transforms the raw string of req.body into json
app.use(express.json());

module.exports = app;

