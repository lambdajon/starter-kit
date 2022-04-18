// application shared dependencies
import { UseCase } from '../../../core/UseCase';
import { AuthMemRepository } from '../../../repository/memory/Auth';

// module dependencies
import * as VO from '../domain/vobjects';

export class PasswordlessAuth implements UseCase<VO.PasswordlessLogin, any, any> {
  private authRepository: AuthMemRepository;
  constructor({ authRepository }) {
    this.authRepository = authRepository;
  }
  act(dataSource: VO.PasswordlessLogin, matchers?: any) {
    return true;
  }
}
