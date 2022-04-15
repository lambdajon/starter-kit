import { Response } from 'express';
import { DecodedRequest } from '../../../domain/DecodedRequest';
import { HttpRegular } from '../../../core/HttpRegular';
import { UserRepository } from '../../../repository/User';
import { UserDelete } from '../useCases/UserDelete';
import { Take } from '../../../interfaces/http/Take';
import { HttpRequestValidator } from '../../../shared/validators/HttpRequestValidator';
import { updateUserSchama } from '../interface/http/validation/index';
import * as VO from '../domain/vobjects';

export class DeleteUser extends HttpRegular {
  private useCase: UserDelete;

  constructor() {
    super();
    this.useCase = new UserDelete({ userRepository: new UserRepository() });
  }
  async actImpl(req: DecodedRequest, res: Response) {
    try {
      const take = new Take<VO.UpdateUser>(req);
      const params = take.params();
      const validator = new HttpRequestValidator({ params }, updateUserSchama);
      const isValid = await validator.validate();
      if (!isValid) {
        const validationErrors = await validator.errors();
        return this.validationError(res, validationErrors);
      }
      const result = await this.useCase.act(params['id']);
      if (!result) {
        return this.notFound(res, 'User not found');
      }
      this.ok(res, { user: result, message: 'User deleted' });
    } catch (e) {
      console.log(e);
    }
  }
}
