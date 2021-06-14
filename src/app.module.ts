import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from './configuration/typeorm-config.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmConfigModule, UsersModule],
})
export class AppModule {}
