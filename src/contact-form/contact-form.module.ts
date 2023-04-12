import { forwardRef, Module } from '@nestjs/common';
import { ContactFormService } from './contact-form.service';
import { ContactFormController } from './contact-form.controller';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [forwardRef(() => MailModule)],
  providers: [ContactFormService],
  controllers: [ContactFormController],
})
export class ContactFormModule {}
