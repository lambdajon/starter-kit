export type MongoDriverOptions = {
  auth: boolean;
  port: number;
  user: string | undefined;
  password: string | undefined;
  database: string;
  host: string;
};
