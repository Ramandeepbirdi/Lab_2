const express = require('express');
const app = express();
// Import the routes file
const routes = require('./routes'); 
// Use the routes file
app.use('/', routes); 

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Your port is ${PORT}`);
});
