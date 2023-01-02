import { Injectable } from '@nestjs/common';

@Injectable()
export class RedisService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  generateToken(email: string, ip: string, number: string) {
    return 0;
  }

  verifyToken(token: string) {
    return true;
  }
}
