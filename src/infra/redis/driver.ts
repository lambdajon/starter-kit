import { createClient, RedisClientType } from 'redis';
import { Database } from '../../core/Drivers';
import { RedisOptions } from './options';

export class RedisDriver implements Database {
  private client: RedisClientType;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: RedisOptions) {
    this.client = createClient();
  }

  async connect(): Promise<void> {
    this.client.on('error', (e) => {
      console.log(e);
    });
    try {
      await this.client.connect();
    } catch (e) {
      throw new Error(e);
    }
  }
}
