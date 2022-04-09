import 'jest-extended';
import AppContainer from '../../src/app';
import { Application } from '../../src/app/application';
import { MongodbDriver } from 'src/infra/mongo/driver';
import { HttpServer } from '../../src/interfaces/http/server';

describe('Application container', () => {
  it('Should load database container', () => {
    const db = AppContainer.resolve<MongodbDriver>('mongoDB');
    expect(db).toBeDefined();
  });

  it('Should http server container', () => {
    const server = AppContainer.resolve<HttpServer>('httpServer');
    expect(server).toBeDefined();
  });

  it('Should application container', () => {
    const app = AppContainer.resolve<Application>('application');
    expect(app).toBeDefined();
  });
});
