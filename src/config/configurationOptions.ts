type HttpOptions = {
  port: number;
};
type ApplicationOptions = {
  http: HttpOptions;
};

type MongoDBOptions = {
  auth: boolean;
  port: number;
  user: string;
  password: string;
  database: string;
  host: string;
};

type RedisOptions = {
  auth: boolean;
  port: number;
  user: string;
  password: string;
  database: string;
  host: string;
};

export type ConfigurationOptions = {
  application: ApplicationOptions;
  mongodb: MongoDBOptions;
  redis: RedisOptions;
};
