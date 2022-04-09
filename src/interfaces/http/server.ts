import express, { Express } from 'express';

export class HttpServer {
  private port: number;
  private app: Express;
  constructor({ config }) {
    console.log(config);
    this.port = config.application.http.port;
    this.app = express();
  }
  start() {
    // return new Promise((resolve) => {
    // this.app.listen(this.port, () => {
    //   console.log(`Application started on http://localhost${this.port}`);
    //   resolve(true);
    // });
    // });
    return Promise.resolve().then(() => {
      this.app.listen(this.port, () => {
        console.log(`Application started on http://localhost${this.port}`);
      });
    });
  }
}
