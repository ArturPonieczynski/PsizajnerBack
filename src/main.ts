import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { configuration } from '../config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  (app as NestExpressApplication).use(helmet());

  app.enableCors({
    origin: [configuration.corsOrigin, 'http://localhost:3000'],
  });

  app.use(cookieParser());

  await app.listen(3001, '0.0.0.0', () => {
    console.log('http://localhost:3001');
  });
}

bootstrap();
