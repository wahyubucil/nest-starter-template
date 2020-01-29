import * as dotenv from 'dotenv';
import * as ormConfig from '../../ormconfig';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

dotenv.config();

class Config {
  constructor(private env: { [key: string]: string | undefined }) {}

  public get(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  get isProduction(): boolean {
    const nodeEnv = this.get('NODE_ENV');
    return nodeEnv === 'production';
  }

  get typeOrmConfig(): TypeOrmModuleOptions {
    // Don't use CLI config on app
    const {
      migrations,
      cli,
      migrationsTableName,
      ...mainConfig
    }: TypeOrmModuleOptions = ormConfig;

    return mainConfig;
  }
}

const config = new Config(process.env);

export { config };
