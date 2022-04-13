import express, { Express } from 'express';
import { ExpressRouter } from './routing';
export class HttpServer {
  private port: number;
  private app: Express;
  constructor({ config }) {
    this.port = config.application.http.port;
    this.app = express();
    new ExpressRouter(this.app);
  }
  start = () => {
    return Promise.resolve().then(() => {
      this.app.listen(this.port, () => {
        console.log(`http server started on http://localhost:${this.port}`);
      });
    });
  };
}
