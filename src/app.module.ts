import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from './configuration/typeorm-config.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TypeOrmConfigModule, AuthModule, TasksModule],
  controllers: [],
})
export class AppModule {}
