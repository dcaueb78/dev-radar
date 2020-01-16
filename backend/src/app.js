const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');


class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  };

  routes() {
    this.server.use(routes);
  }
}

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-tjv0x.mongodb.net/week10?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

module.exports = new App().server;