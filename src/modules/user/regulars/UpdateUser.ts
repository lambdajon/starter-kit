import { Response } from 'express';
import { DecodedRequest } from '../../../domain/DecodedRequest';
import { HttpRegular } from '../../../core/HttpRegular';
import { UserRepository } from '../../../repository/User';
import { UserUpdate } from '../useCases/UserUpdate';
import { Take } from '../../../interfaces/http/Take';
import * as VO from '../domain/vobjects';
import { HttpRequestValidator } from '../../../shared/validators/HttpRequestValidator';
import { updateUserSchama } from '../interface/http/validation';

export class UpdateUser extends HttpRegular {
  private useCase: UserUpdate;

  constructor() {
    super();
    this.useCase = new UserUpdate({ userRepository: new UserRepository() });
  }
  async actImpl(req: DecodedRequest, res: Response) {
    try {
      const take = new Take<VO.UpdateUser>(req);
      const param = take.params();
      const updatedUser = take.body();
      const validator = new HttpRequestValidator({ body: updatedUser, params: param }, updateUserSchama);
      const isValid = await validator.validate();
      if (!isValid) {
        const validationErrors = await validator.errors();
        return this.validationError(res, validationErrors);
      }
      const result = await this.useCase.act(updatedUser, param['id']);
      if (!result) {
        return this.notFound(res, 'User not found');
      }
      this.ok(res, result);
    } catch (e) {
      console.log(e);
    }
  }
}
