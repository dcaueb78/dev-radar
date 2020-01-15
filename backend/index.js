const express = require('express');

const app = express();

app.get(express.json());

app.get('/', (req, res) => {
  return res.json({ok: 'oi'})
})

app.listen(3333);