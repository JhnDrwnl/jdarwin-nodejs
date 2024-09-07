const express = require('express');
const bodyParser = require('body-parser');
const bmiRoutes = require('./routes/bmiRoutes');

const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from "public" folder
app.use(express.static('public'));

// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Use BMI routes
app.use('/', bmiRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
