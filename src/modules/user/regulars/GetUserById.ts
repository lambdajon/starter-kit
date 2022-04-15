import { Response } from 'express';
import { DecodedRequest } from '../../../domain/DecodedRequest';
import { HttpRegular } from '../../../core/HttpRegular';
import { UserRepository } from '../../../repository/User';
import { UserGetById } from '../useCases/UserGetById';
import { Take } from '../../../interfaces/http/Take';
import { HttpRequestValidator } from '../../../shared/validators/HttpRequestValidator';
import { getUserSchemaById } from '../interface/http/validation/index';
import * as VO from '../domain/vobjects';

export class GetUserById extends HttpRegular {
  private useCase: UserGetById;

  constructor() {
    super();
    this.useCase = new UserGetById({ userRepository: new UserRepository() });
  }
  async actImpl(req: DecodedRequest, res: Response) {
    try {
      const take = new Take<VO.GetUserById>(req);
      const id = take.params();
      const validator = new HttpRequestValidator({ params: id }, getUserSchemaById);
      const isValid = await validator.validate();
      if (!isValid) {
        const validationErrors = await validator.errors();
        return this.validationError(res, validationErrors);
      }
      const result = await this.useCase.act(id['id']);
      this.ok(res, result);
    } catch (e) {
      console.log(e);
    }
  }
}
