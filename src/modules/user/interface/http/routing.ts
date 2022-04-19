import { HttpRouting } from '../../../../core/ExpressHttpRouting';
import { CreateUser } from '../../regulars/CreateUser';
import { UpdateUser } from '../../regulars/UpdateUser';

export default class UserRouting extends HttpRouting {
  constructor(path = '/') {
    super(path);
    this.router.route(this.prefix).post((req, res) => new CreateUser().act(req, res));
    this.router.route(this.prefix + '/:userId').put((req, res) => new UpdateUser().act(req, res));
  }
  routes() {
    return this.router;
  }
}
