import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (!config.isProduction) {
    const options = new DocumentBuilder()
      .setTitle(config.get('APP_NAME'))
      .setDescription('API Documentation')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);
  }

  app.useGlobalInterceptors(new ClassSerializerInterceptor(new Reflector()));
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(config.get('PORT'));
}
bootstrap();
