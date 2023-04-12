import { Body, Controller, Inject, Post } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserService } from './user.service';
import { RegisterUserResponse } from '../../types';

@Controller('user')
export class UserController {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Post('/login')
  register(@Body() newUser: RegisterUserDto): Promise<RegisterUserResponse> {
    return this.userService.register(newUser);
  }

  // @TODO dokończyć kod potwierdzający maila

  //   @Post('/login/:code?')
  //   confirmation(
  //     @Body() newUser: RegisterUserDto,
  //     @Res() res: Response,
  //     @Param('code') promptCode?: string,
  //   ) {
  //     return this.userService.confirmation(newUser, res, promptCode);
  //   }
}
