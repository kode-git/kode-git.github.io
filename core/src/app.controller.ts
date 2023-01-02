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

  @Post()
  checkToken(@Body() body: any, @Res() res: any) {
    const token = body.token;
    const result = this.redisManager.checkToken(token);
    res.send(result);
  }
}
