import { RedisDB } from '../../infra/redis';
import { MemoryRepository } from '../../core/MemoryRepository';

export class AuthMemRepository extends MemoryRepository {
  constructor() {
    super();
    this.hashName = 'authSession';
  }
  async createAuthSession(data: any) {
    try {
      return await RedisDB.create(this.hashName, this.hashName, data);
    } catch (e) {
      throw new Error(e);
    }
  }
}
