import { Response } from 'express';
import { DecodedRequest } from '../../../domain/DecodedRequest';
import { HttpRegular } from '../../../core/HttpRegular';
import { UserRepository } from '../../../repository/User';
import { UserUpdate } from '../useCases/UserUpdate';
import { Take } from '../../../interfaces/http/Take';
import * as VO from '../domain/vobjects';

export class UpdateUser extends HttpRegular {
  private useCase: UserUpdate;

  constructor() {
    super();
    this.useCase = new UserUpdate({ userRepository: new UserRepository() });
  }
  async actImpl(req: DecodedRequest, res: Response) {
    try {
      const take = new Take<VO.UpdateUser>(req);
      const user_id = take.params('id');
      const updatedUser = take.body();
      const result = await this.useCase.act(user_id, updatedUser);
      this.created(res, result);
    } catch (e) {
      console.log(e);
    }
  }
}
