import { HttpRouting } from '../../../../core/ExpressHttpRouting';
import { CreateUser } from '../../regulars/CreateUser';
import { UpdateUser } from '../../regulars/UpdateUser';
import { DeleteUser } from '../../regulars/DeleteUser';
import { GetUsers } from '../../regulars/GetUsers';
import { GetUser } from '../../regulars/GetUser';

export default class UserRouting extends HttpRouting {
  constructor(path = '/') {
    super(path);
    this.router.route(this.prefix).get((req, res) => new GetUsers().act(req, res));
    this.router.route(this.prefix).post((req, res) => new CreateUser().act(req, res));
    this.router.route(this.prefix + '/:userId').get((req, res) => new GetUser().act(req, res));
    this.router.route(this.prefix + '/:userId').put((req, res) => new UpdateUser().act(req, res));
    this.router.route(this.prefix + '/:userId').delete((req, res) => new DeleteUser().act(req, res));
  }
  routes() {
    return this.router;
  }
}
