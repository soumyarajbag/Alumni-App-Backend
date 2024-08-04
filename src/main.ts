import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {  ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as swaggerUi from 'swagger-ui-express';
import { BasicAuthMiddleware } from 'middlewares/swagger-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api/v1");
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  app.enableCors();
 
  const options = new DocumentBuilder()
    .setTitle('Alumni App API')
    .setDescription('Documentation for All the APIs for Alumni App RCCIIT')
    .setVersion('1.0')
    .addServer('http://localhost:8000/', 'Local environment')
    .addTag('RCCIIT Alumni Association App')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      description: 'Enter your token without the "Bearer " prefix',
    }, 'Token')
    .build();

const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  app.use('/api-docs', BasicAuthMiddleware, swaggerUi.serve, swaggerUi.setup(document));
  await app.listen(8000);
}
bootstrap();
