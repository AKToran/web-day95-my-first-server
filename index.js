const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res)=>{
  res.send('Hello from my first express server.');
})

app.get('/data', (req, res)=>{
  res.send("More data loading soon...");
})

app.get('/auth', (req, res)=>{
  res.send("authentication....")
})

app.listen(port, () =>{
  console.log(`My first server is running on port: ${port}`);
})

