import express from 'express';
import cors from 'cors';
import http from 'http';
import routes from './routes';
import './database';
import setupWebSocket from './websocket';

class App {
  constructor() {
    this.server = express();
    this.serverHttp = http.Server(App);
    setupWebSocket(this.serverHttp);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App();
