const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-tjv0x.mongodb.net/week10?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.get(express.json());
app.use(routes);

app.listen(3333);
