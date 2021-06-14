import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './typeorm-config.service';
import * as path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

const activeEnv = process.env.APP_ENV || 'local';
console.info('Current envoirment is', activeEnv);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.resolve(process.cwd(), 'env', `.${activeEnv}.env`),
    }), // environment variables

    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }), // typeorm configurtation
  ],

  providers: [TypeOrmConfigService],
})
export class TypeOrmConfigModule {}
