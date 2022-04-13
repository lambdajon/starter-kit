import { Router, json, urlencoded } from 'express';
import cors from 'cors';
import UserRoutes from '../../modules/user/interface/http/routing';

export class ExpressRouter {
  private router: Router;
  constructor(app) {
    this.router = Router({ mergeParams: true });
    this.router.use(json());
    this.router.use(urlencoded());
    this.router.use(cors());
    // this.router.use('/status', (req, res) => {
    //   res.send('hello');
    // });

    const userRoutes: UserRoutes = new UserRoutes('/users');
    this.router.use(userRoutes.routes());

    app.use(this.router);
  }
  routing = () => {
    return this.router;
  };
}
