import { HttpRouting } from '../../../../core/ExpressHttpRouting';
import { CreateUser } from '../../regulars/CreateUser';
import { GetUserById } from '../../regulars/GetUserById';
export default class UserRouting extends HttpRouting {
  constructor(path = '/') {
    super(path);
    this.router.route(this.prefix).post((req, res) => new CreateUser().act(req, res));
    this.router.route(`${this.prefix}/:id`).get((req, res) => new GetUserById().act(req, res));
  }
  routes() {
    return this.router;
  }
}
