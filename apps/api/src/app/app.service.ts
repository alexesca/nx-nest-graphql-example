import { Injectable } from '@nestjs/common';
import { Message } from '@nx-apollo-angular-nest-graphql-example/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
