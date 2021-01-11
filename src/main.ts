import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, new DocumentBuilder()
    .setTitle('User API')
    .setDescription('My User API')
    .build());

  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
