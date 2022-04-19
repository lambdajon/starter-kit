import { Database } from '../../core/Drivers';
import { AwlixContainer } from '../../core/InjectableDependancies';
declare class MongoDriver implements Database {
  private url: string;
  constructor(options: AwlixContainer);
  connect(): Promise<void>;
}

export { MongoDriver };
