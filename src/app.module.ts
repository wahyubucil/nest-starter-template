import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './module/item/item.module';
import { config } from './config/config';

@Module({
  imports: [TypeOrmModule.forRoot(config.typeOrmConfig), ItemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
