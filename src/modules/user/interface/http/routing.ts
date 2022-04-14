import User from 'src/infra/mongo/models/User';
import { HttpRouting } from '../../../../core/ExpressHttpRouting';
import { CreateUser } from '../../regulars/CreateUser';
import { GetUser } from '../../regulars/GetUser';
export default class UserRouting extends HttpRouting {
  constructor(path = '/users') {
    super(path);
    this.router.route(this.prefix).post((req, res) => new CreateUser().act(req, res));
    this.router.route(this.prefix).get((req, res) => new GetUser().act(req, res));
  }
  routes() {
    return this.router;
  }
}
