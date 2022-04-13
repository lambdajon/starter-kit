export class Application {
  private mongoDB;
  private httpServer;
  private redis;
  constructor({ mongoDB, httpServer, redis }) {
    this.mongoDB = mongoDB;
    this.httpServer = httpServer;
    this.redis = redis;
  }

  start = () => {
    return Promise.resolve().then(this.mongoDB.connect).then(this.redis.connect).then(this.httpServer.start);
  };
}
