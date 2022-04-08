import { createContainer, asFunction, asClass } from 'awilix';
import Config from '../config';
import { MongodbDriver } from '../infra/mongo/driver';
import { RedisDriver } from '../infra/redis/driver';
const container = createContainer();

export default container.register({
  mongoDB: asClass(MongodbDriver).classic(),
  redis: asClass(RedisDriver).classic()
});
