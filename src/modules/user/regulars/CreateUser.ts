import { Response } from 'express';
import { DecodedRequest } from '../../../domain/DecodedRequest';
import { HttpRegular } from '../../../core/HttpRegular';
import { UserRepository } from '../../../repository/User';
import { UserCreate } from '../useCases/UserCreate';
import { Take } from '../../../interfaces/http/Take';
import { HttpRequestValidator } from '../../../shared/validators/HttpRequestValidator';
import { createUserSchama } from '../interface/http/validation/index';
import * as VO from '../domain/vobjects';

export class CreateUser extends HttpRegular {
  private useCase: UserCreate;

  constructor() {
    super();
    this.useCase = new UserCreate({ userRepository: new UserRepository() });
  }
  async actImpl(req: DecodedRequest, res: Response) {
    try {
      const take = new Take<VO.CreateUser>(req);
      const newUser = take.body();
      const validator = new HttpRequestValidator({ body: newUser }, createUserSchama);
      const isValid = await validator.validate();
      if (!isValid) {
        const validationErrors = await validator.errors();
        return this.validationError(res, validationErrors);
      }
      const result = await this.useCase.act(newUser);
      this.created(res, result);
    } catch (e) {
      console.log(e);
    }
  }
}
