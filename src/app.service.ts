import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('datastream') private client: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  sendRedisEvent(event): void {
    console.log('Sending event');
    this.client.emit('event', event);
    console.log('Event sent');
  }
}
