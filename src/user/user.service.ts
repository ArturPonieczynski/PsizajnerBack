import { Inject, Injectable } from '@nestjs/common';
import { RegisterUserResponse } from 'types';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './user.entity';
import { hashPwd } from '../utils/hash-pwd';
import { MailService } from '../mail/mail.service';

@Injectable()
export class UserService {
  constructor(@Inject(MailService) private mailService: MailService) {}

  filter(user: User): RegisterUserResponse {
    const { id, email } = user;
    return { id, email };
  }

  confirmationCode(): number {
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  }

  async register(newUser: RegisterUserDto): Promise<RegisterUserResponse> {
    //@TODO stworzenie if-a z weryfikacją czy email juz jest w bazie danych

    const user = new User();
    user.name = newUser.name;
    user.surname = newUser.surname;
    user.email = newUser.email;
    user.street = newUser.street;
    user.city = newUser.city;
    user.country = newUser.country;
    user.passwordHash = hashPwd(newUser.password);

    await user.save();

    return this.filter(user);
  }

  // @TODO dokończyć kod potwierdzający maila
  // async confirmation(
  //   newUser: RegisterUserDto,
  //   res: Response,
  //   promptCode: string,
  // ) {
  //   const user = new User();
  //   user.email = newUser.email;
  //
  //   const generatedConfirmationCode = this.confirmationCode();
  //
  //   await this.mailService.sendMail(
  //     user.email,
  //     'Psizajner - Confirmation code.',
  //     `Your confirmation code is: ${generatedConfirmationCode}`,
  //   );
  //
  //   console.log(generatedConfirmationCode);
  //
  //   res.json({
  //     code: 'window.prompt("Please enter confirmation code from your e-mail:")',
  //   });
  //
  //   const checkConfirmationCode = (promptCode) => {
  //     if (Number(promptCode) !== generatedConfirmationCode) {
  //       return res.json({
  //         code: 'Confirmation code is wrong, please try again:',
  //       });
  //     }
  //   };
  //
  //   checkConfirmationCode(promptCode);
  //   const url = request.url;
  //   console.log(url);
  //   // res.redirect(`${}`)
  // }
}
