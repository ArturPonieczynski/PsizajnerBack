import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  (app as NestExpressApplication).use(helmet());

  app.use(cookieParser());

  await app.listen(3001);
}
bootstrap();
