import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/config';

@Module({
  imports: [TypeOrmModule.forRoot(config.typeOrmConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
