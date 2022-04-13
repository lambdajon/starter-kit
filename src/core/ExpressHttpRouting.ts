import { Router } from 'express';

export abstract class HttpRouting {
  protected router: Router;
  protected prefix: string;
  constructor(path = '/') {
    this.router = Router();
    this.prefix = path;
  }
  routes(): Router {
    return this.router;
  }
}
