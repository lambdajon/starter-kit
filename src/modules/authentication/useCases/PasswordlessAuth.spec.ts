import { PasswordlessAuth } from './PasswordlessAuth';

describe('Passwordless Auth', () => {
  it('should successfull login', async () => {
    const repo = {
      async createAuthSession() {
        return 1;
      }
    };

    const auth = new PasswordlessAuth({ authRepository: repo });
    const result = await auth.act({ phoneNumber: 'string', password: 'string' });
  });
});
