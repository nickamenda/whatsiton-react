const PORT = 1456;
const express = require('express')
const db = require('./db.js')
const app = express();

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
  if (req.query.title.includes('%20')) {
    req.query.title = req.query.title.replace('%20', ' ')
  }
  db(req.query.title)
  .then((data) => {
    res.end(JSON.stringify(data))
  })
})

app.listen(PORT);
console.log(`Server listening at ${PORT}`);
