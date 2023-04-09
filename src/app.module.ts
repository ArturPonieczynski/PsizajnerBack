import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../orm.config';
import { MailModule } from './mail/mail.module';
import { ContactFormModule } from './contact-form/contact-form.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), MailModule, ContactFormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
