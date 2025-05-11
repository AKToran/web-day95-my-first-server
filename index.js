const express = require('express');
const phones = require('./phones.json');
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

app.get('/phones', (req, res)=>{
  res.send(phones);
})

app.get('/phones/:id', (req, res)=>{
  const id = parseInt(req.params.id);
  console.log('data for id', id);
  const phone = phones.find(phone => phone.id === id) || {};
  res.send(phone)
})

app.listen(port, () =>{
  console.log(`My first server is running on port: ${port}`);
})

