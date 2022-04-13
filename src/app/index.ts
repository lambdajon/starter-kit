import { createContainer, asClass, InjectionMode, asValue } from 'awilix';
import Config from '../config';
import { AwlixContainer } from '../core/InjectableDependancies';
import { MongodbDriver } from '../infra/mongo/driver';
import { RedisDriver } from '../infra/redis/driver';
import { HttpServer } from '../interfaces/http/server';
import { Application } from './application';

const container = createContainer<AwlixContainer>({
  injectionMode: InjectionMode.PROXY
});

export default container.register({
  mongoDB: asClass(MongodbDriver),
  redis: asClass(RedisDriver).singleton(),
  httpServer: asClass(HttpServer).singleton(),
  application: asClass(Application),
  config: asValue(Config)
});
