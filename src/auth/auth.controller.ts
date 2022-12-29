import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('singIn')
  create(
    @Body() { emailOrPhone, pass }: { emailOrPhone: string; pass: string },
  ) {
    return this.authService.singIn(emailOrPhone, pass);
  }
}
