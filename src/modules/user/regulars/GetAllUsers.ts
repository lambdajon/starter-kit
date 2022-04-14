import { Response } from 'express';
import { DecodedRequest } from '../../../domain/DecodedRequest';
import { HttpRegular } from '../../../core/HttpRegular';
import { UserRepository } from '../../../repository/User';
import { UserGetAll } from '../useCases/UserGetAll';

export class GetAllUsers extends HttpRegular {
  private useCase: UserGetAll;

  constructor() {
    super();
    this.useCase = new UserGetAll({ userRepository: new UserRepository() });
  }
  async actImpl(req: DecodedRequest, res: Response) {
    try {
      const result = await this.useCase.act();
      if (!result) {
        return this.notFound(res, 'Users not found');
      }
      this.ok(res, result);
    } catch (e) {
      console.log(e);
    }
  }
}
