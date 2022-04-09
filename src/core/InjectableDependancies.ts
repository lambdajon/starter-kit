import { ConfigurationOptions } from '../config/configurationOptions';
import { MongodbDriver } from '../infra/mongo/driver';
import { RedisDriver } from '../infra/redis/driver';
import { HttpServer } from '../interfaces/http/server';
import { Application } from '../app/application';
export interface AwlixContainer {
  mongoDB: MongodbDriver;
  redis: RedisDriver;
  config: ConfigurationOptions;
  httpServer: HttpServer;
  application: Application;
}
