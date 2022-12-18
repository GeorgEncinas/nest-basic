import { Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('ndjwand') // localhost:3000
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly calcService: CalculatorService,
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  returnParams(
    @Query('a') a: Number,
    @Query('b') b: Number,
  ) {
    console.log(a,b);
    return 'Ok' + a +b;
  }
}
