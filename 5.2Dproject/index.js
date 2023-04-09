const { json } = require('express');
const express = require('express'); 
const app = express();     

//Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Home page request
app.get('/', (req, res) => { 
  res.send("Welcome to the microservice");
}); 

app.listen(PORT, HOST, () => { 
  console.log('Running on http://${HOST}:${PORT}'); 
}); 