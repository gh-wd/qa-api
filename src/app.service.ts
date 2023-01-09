import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return (
      'Hello World! ' +
      process.env.HELLO +
      ' Testing out hot reload with dockerized dev environment'
    );
  }
}
