import { RedisClientType } from 'redis';
import ApplicationContainer from '../../app';

export class RedisDB {
  static async create(path: string, key: string, value: string) {
    const connection: RedisClientType = await ApplicationContainer.resolve('redis').connection();
    return await connection.hSet(path, key, value);
  }
}
