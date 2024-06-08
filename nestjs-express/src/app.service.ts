import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async helloWorld(): Promise<{ message: string }> {
    return { message: 'hello world' };
  }
}
