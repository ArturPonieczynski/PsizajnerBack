import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ContactFormService } from './contact-form.service';
import { SendMailDto } from './dto/send-mail.dto';

@Controller('/shop/contact-form')
export class ContactFormController {
  constructor(
    @Inject(ContactFormService) private contactFormService: ContactFormService,
  ) {}

  @Post('/send')
  sendMail(@Body() message: SendMailDto): Promise<any> {
    return this.contactFormService.sendMail(message);
  }
}
