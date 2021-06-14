import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as Models from '../models';


@Injectable()
export class TypeOrmConfigService {
  public constructor(private readonly _config: ConfigService) {}

  //passing typeorm configuration options
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return {
      type: 'mysql',
      host: this._config.get('DB_HOST'),
      port: parseInt(this._config.get('DB_PORT')),
      username: this._config.get('DB_USERNAME'),
      password: this._config.get('DB_PASSWORD'),
      database: this._config.get('DB_DATABASE'),
      entities: Object.keys(Models).map((k) => Models[k]),
      autoLoadEntities: true,
      synchronize: false,
    };
  }
}
