import { Database } from '../../core/Drivers';
import { MongoDriverOptions } from './options';

declare class MongoDriver implements Database {
  constructor(options: MongoDriverOptions);
  connect(): Promise<void>;
}

export { MongoDriver };
