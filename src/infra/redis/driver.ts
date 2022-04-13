import { createClient, RedisClientType, RedisClientOptions } from 'redis';
import { Database } from '../../core/Drivers';
import { RedisOptions } from './options';

export class RedisDriver implements Database {
  private options: RedisClientOptions = {};
  private client: RedisClientType;
  constructor({ config }) {
    const options: RedisOptions = config.redis;
    // redis[s]://[[username][:password]@][host][:port]
    if (options.host) {
      this.options.url = `redis://${options.host}:${options.port}`;
    }
  }

  connect = async (): Promise<void> => {
    this.client = createClient(this.options);
    try {
      await this.client.connect();
      console.log('Redis Server connected');
    } catch (e) {
      throw new Error(e);
    }
  };

  connection(): RedisClientType {
    return this.client;
  }
}
