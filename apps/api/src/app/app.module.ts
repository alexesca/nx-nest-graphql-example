import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SetResolver } from './set.resolver';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',

    })
  ],
  controllers: [AppController],
  providers: [AppService, SetResolver],
})
export class AppModule { }
