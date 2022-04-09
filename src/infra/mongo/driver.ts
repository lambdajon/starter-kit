import mongoose from 'mongoose';
import { MongoDriverOptions } from './options';
import { Database } from '../../core/Drivers';

export class MongodbDriver implements Database {
  private url: string;
  constructor({ config }) {
    const options: MongoDriverOptions = config.mongodb;
    if (options.auth) {
      this.url = `mongodb://${options.address}${options.user}:$${options.password}@${options.address}:${options.port}/${options.database}`;
    }
    this.url = `mongodb://${options.address}:${options.port}/${options.database}`;
  }

  async connect(): Promise<void> {
    // try {
    //   await mongoose.connect(this.url);
    // } catch (e) {
    //   throw new Error(e);
    // }
  }
}
