import { Injectable } from '@nestjs/common';

 
@Injectable()
export class RedisService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  /**
   * Store the token in Redis store
   * @param username is the username key
   * @param password is the password linked
   * @returns the token stored into the redis store
   */
  storeToken(username: string, password: string): number {
    console.warn('Received:', username, 'and', password);s
    return 0;
  }

  /**
   * Verify if the token is already stored in the Redis store
   * @param token is the series to check into the Redis store
   * @returns boolean about the check outcome
   */
  checkToken(token: string): boolean {
    console.warn('Received:', token);
    return true;
  }
}
