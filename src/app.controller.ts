import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  sendRedisEvent(@Body() event: any): string {
    this.appService.sendRedisEvent(event);
    return 'Event sent';
  }

  @EventPattern('event')
  async handleEvent(data: any) {
    console.log('Received event', data);
    console.log('inside handleEvent');
  }
}
