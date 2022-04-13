import { Response } from 'express';
import { DecodedRequest } from '../../../domain/DecodedRequest';
import { HttpRegular } from '../../../core/HttpRegular';
import { UserRepository } from '../../../repository/User';
import { UserGet } from '../useCases/UserGet';
import { Take } from '../../../interfaces/http/Take';
import * as VO from '../domain/vobjects';

export class GetUser extends HttpRegular {
  private useCase: UserGet;

  constructor() {
    super();
    this.useCase = new UserGet({ userRepository: new UserRepository() });
  }
  async actImpl(req: DecodedRequest, res: Response) {
    try {
      const take = new Take<VO.GetUser>(req);
      const user = take.body();
      const result = await this.useCase.act(user);
      this.ok(res, result);
    } catch (e) {
      console.log(e);
    }
  }
}
