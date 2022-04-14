import { HttpRouting } from '../../../../core/ExpressHttpRouting';
import { CreateUser } from '../../regulars/CreateUser';
import { UpdateUser } from '../../regulars/UpdateUser';
import { GetUser } from '../../regulars/GetUser';
import { RemoveUser } from '../../regulars/RemoveUser';
export default class UserRouting extends HttpRouting {
  constructor(path = '/') {
    super(path);
    this.router.route(this.prefix).post((req, res) => new CreateUser().act(req, res));
    this.router.route(`${this.prefix}/:id`).put((req, res) => new UpdateUser().act(req, res));
    this.router.route(`${this.prefix}/:id`).get((req, res) => new GetUser().act(req, res));
    this.router.route(`${this.prefix}/:id`).delete((req, res) => new RemoveUser().act(req, res));
  }
  routes() {
    return this.router;
  }
}
