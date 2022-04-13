import { RedisClientType } from 'redis';
import ApplicationContainer from '../../app';

// const redis = ApplicationContainer.cradle.redis.connection;

export class RedisDB {
  private db: RedisClientType;
  constructor() {
    this.db = ApplicationContainer.cradle.redis.connection();
  }
  create(path: string, key: string, value: string) {
    return this.db.hSet(path, key, value);
  }
  
}
