import { Inject, Injectable } from "@nestjs/common";
import { MailService } from "../mail/mail.service";
import { SendMailDto } from "./dto/send-mail.dto";

@Injectable()
export class ContactFormService {
  constructor(
    @Inject(MailService) private mailService: MailService,
  ) {}


  async sendMail(message: SendMailDto): Promise<void> {
    await this.mailService.sendMail('shopAdminMail@example.com', message.email, `${message.name} \r\n ${message.description}`);

  }
}
