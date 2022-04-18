// external npm dependencies
import { Response } from 'express';
// application shared dependencies
import { DecodedRequest } from '../../../domain/DecodedRequest';
import { HttpRegular } from '../../../core/HttpRegular';
import { HttpRequestValidator } from '../../../shared/validators/HttpRequestValidator';
import { Take } from '../../../interfaces/http/Take';
// module dependencies
import { loginSchema } from '../interface/http/validation';
import * as VO from '../domain/vobjects';

export class PasswordlessAuth extends HttpRegular {
  // private useCase:
  constructor() {
    super();
  }
  async actImpl(req: DecodedRequest, res: Response): Promise<any> {
    try {
      const decodedRequest = new Take<VO.PasswordlessLogin>(req);
      const body = decodedRequest.body();
      const validator = new HttpRequestValidator({ body }, loginSchema);
      const isValid = await validator.validate();
      if (!isValid) {
        const validationErrors = await validator.errors();
        return this.validationError(res, validationErrors);
      }
      // const result = await this.useCase.act(newUser);
    } catch (e) {
      console.log(e);
    }
  }
}
