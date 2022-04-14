import { Response } from 'express';
import { DecodedRequest } from '../../../domain/DecodedRequest';
import { HttpRegular } from '../../../core/HttpRegular';
import { UserRepository } from '../../../repository/User';
import { UserRemove } from '../useCases/UserRemove';
import { Take } from '../../../interfaces/http/Take';
import * as VO from '../domain/vobjects';
import { HttpRequestValidator } from '../../../shared/validators/HttpRequestValidator';
import { removeUserSchama } from '../interface/http/validation';

export class RemoveUser extends HttpRegular {
  private useCase: UserRemove;

  constructor() {
    super();
    this.useCase = new UserRemove({ userRepository: new UserRepository() });
  }
  async actImpl(req: DecodedRequest, res: Response) {
    try {
      const take = new Take<VO.UpdateUser>(req);
      const param = take.params();
      const validator = new HttpRequestValidator({ params: param }, removeUserSchama);
      const isValid = await validator.validate();
      if (!isValid) {
        const validationErrors = await validator.errors();
        return this.validationError(res, validationErrors);
      }
      const result = await this.useCase.act(param['id']);
      if (!result) {
        return this.notFound(res, 'User not found');
      }
      this.ok(res, result);
    } catch (e) {
      console.log(e);
    }
  }
}
