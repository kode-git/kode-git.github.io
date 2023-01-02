import { Controller, Get, Body, Res, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RedisService } from './services/redis/redis/redis.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly redisManager: RedisService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/verifyToken')
  verifyToken(@Body() body: any, @Res() res: any) {
    const token = body.token;
    // verify token to RedisManager
    const result = this.redisManager.verifyToken(token);
    res.send(result);
  }

  @Post('/generateToken')
  generateToken(@Body() body: any, @Res() res: any){
    // generate a token to RedisManager
    const email = body.email;
    const ip = body.ip;
    const number = body.number;

    const token = this.redisManager.generateToken(email, ip, number);
    res.send(token);
  }
}
