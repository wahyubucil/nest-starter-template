import * as dotenv from 'dotenv';

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
}

const config = new Config(process.env);

export { config };
