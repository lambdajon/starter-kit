import { HttpRegular } from '../../../core/HttpRegular';
import { DecodedRequest } from '../../../domain/DecodedRequest';
import { UserUpdate } from '../useCases/UserUpdate';
import { UserRepository } from '../../../repository/User';
import * as VO from '../domain/vobjects';
import { Take } from '../../../interfaces/http/Take';
import { HttpRequestValidator } from '../../../shared/validators/HttpRequestValidator';
import { updateUserSchema } from '../interface/http/validation';
import { Response } from 'express';

export class UpdateUser extends HttpRegular {
  private useCase: UserUpdate;

  constructor() {
    super();
    this.useCase = new UserUpdate({ userRepository: new UserRepository() });
  }

  async actImpl(req: DecodedRequest, res: Response) {
    try {
      const take = new Take<VO.UpdateUser>(req);
      const updateUser = take.body();
      const id = take.params('id');
      const validator = new HttpRequestValidator({ body: updateUser, params: { id } }, updateUserSchema);
      const isValid = await validator.validate();
      if (!isValid) {
        const validationErrors = await validator.errors();
        return this.validationError(res, validationErrors);
      }
      const result = await this.useCase.act(updateUser, id as string);
      this.ok(res, result);
    } catch (e) {
      console.log(e);
    }
  }
}
