export class Application {
  private mongoDB;
  private httpServer;
  constructor({ mongoDB, httpServer }) {
    this.mongoDB = mongoDB;
    this.httpServer = httpServer;
  }

  start = () => {
    return Promise.resolve().then(this.mongoDB.connect).then(this.httpServer.start);
  };
}
