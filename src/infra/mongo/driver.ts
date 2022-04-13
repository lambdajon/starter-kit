import mongoose from 'mongoose';
import { MongoDriverOptions } from './options';
import { Database } from '../../core/Drivers';

export class MongodbDriver implements Database {
  private url: string;
  constructor({ config }) {
    const options: MongoDriverOptions = config.mongodb;
    if (options.auth) {
      this.url = `mongodb://${options.host}${options.user}:$${options.password}@${options.host}:${options.port}/${options.database}`;
    }
    this.url = `mongodb://${options.host}:${options.port}/${options.database}`;
  }

  connect = async (): Promise<void> => {
    try {
      await mongoose.connect(this.url);
      console.log('Connected to mongodb');
    } catch (e) {
      throw new Error(e);
    }
  };
}
