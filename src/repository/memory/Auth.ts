import { RedisDB } from '../../infra/redis';

export class AuthMemRepository {
  private path = 'auth';

  async createAuthSession(data: any) {
    try {
      return await RedisDB.create(this.path, 'user', data);
    } catch (e) {
      throw new Error(e);
    }
  }
}
