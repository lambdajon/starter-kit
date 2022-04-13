import { Database } from '../../core/Drivers';
import { Application } from '../../core/InjectableDependancies';
declare class MongoDriver implements Database {
  private url: string;
  constructor(options: Application);
  connect(): Promise<void>;
}

export { MongoDriver };
