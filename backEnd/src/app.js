import 'dotenv/config';
import 'express-async-errors';

import './database';

import Youch from 'youch';
import Cors from 'cors';
import Path from 'path';
import Express from 'express';

import Routes from './app/routes';

class App {
  constructor() {
    this.server = Express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Express.json());
    this.server.use(Cors());
    this.server.use('/files', Express.static(Path.resolve(__dirname, '..', 'tmp', 'uploads')));
  }

  routes() {
    this.server.use(Routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
