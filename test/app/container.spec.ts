import 'jest-extended';
import AppContainer from '../../src/app';
import { Application } from '../../src/app/application';
import { MongodbDriver } from 'src/infra/mongo/driver';
import { HttpServer } from '../../src/interfaces/http/server';
import { RedisDriver } from '../../src/infra/redis/driver';
describe('Application container', () => {
  it('Should load database container', () => {
    const db = AppContainer.resolve<MongodbDriver>('mongoDB');
    expect(db).toBeDefined();
  });

  it('Should load http server container', () => {
    const server = AppContainer.resolve<HttpServer>('httpServer');
    expect(server).toBeDefined();
  });

  it('Should load application container', () => {
    const app = AppContainer.resolve<Application>('application');
    expect(app).toBeDefined();
  });

  it('Should load redis container', () => {
    const redis = AppContainer.resolve<RedisDriver>('redis');
    expect(redis).toBeDefined();
  });
});
