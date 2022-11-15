const PORT = 1456;
const express = require('express')
const db = require('./db.js')
const app = express();
const axios = require('axios')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/watchmode?:title', (req, res) => {
  console.log(req.query)
  if (req.query.title.includes('%20')) {
    req.query.title = req.query.title.replace('%20', ' ')
  }
  db(req.query.title)
  .then((data) => {
    res.end(JSON.stringify(data))
  })
})
app.get('/watchmode/title?:id', (req, res) => {
  axios.get(`https://api.watchmode.com/v1/title/${req.query.id}/details/?apiKey=${process.env.apiKey}&append_to_response=sources`)
  .then((response) => {
    res.end(JSON.stringify(response.data))
  })
})
app.listen(PORT);
console.log(`Server listening at ${PORT}`);
