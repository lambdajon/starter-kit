import { compare, genSalt, hash } from 'bcryptjs';

export default class {
  /**
   * Check user password
   * @param {string} passwod
   * @param {string} hashedPassword
   * @return {Promise<boolean>}
   */
  static async checkUserPassword(passwod = '', hashedPassword = ''): Promise<boolean | Error> {
    try {
      return await compare(passwod, hashedPassword);
    } catch (e) {
      return false;
    }
  }
  /**
   * Encrypt user password
   * @param {string} passwod
   * @return {Promise<boolean | Error>}
   */
  static async hashPassword(password: string): Promise<string> {
    const salt: string = await genSalt(10);
    return await hash(password, salt);
  }
}
