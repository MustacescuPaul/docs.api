import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { DocsModule } from './docs/docs.module';

@Module({
  imports: [UsersModule,TypeOrmModule.forRoot({
    'type': 'mysql',
    'host': 'localhost',
    'port': 3306,
    'username': 'root',
    'password': 'root',
    'database': 'docs',
    'entities': [User],
    'synchronize': true,
    autoLoadEntities: true,
  }),UsersModule, DocsModule],

})
export class AppModule {}
