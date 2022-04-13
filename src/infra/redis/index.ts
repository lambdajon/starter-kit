import { RedisClientType } from 'redis';
import ApplicationContainer from '../../app';

// const redis = ApplicationContainer.cradle.redis.connection;

export class RedisDB {
  private db: any;
  static async create(path: string, key: string, value: string) {
    const con = await ApplicationContainer.resolve('redis').connection();
    return await con.hSet(path, key, value);
  }
}
