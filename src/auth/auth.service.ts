import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from 'src/app.module';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { JWTPayload } from './JWTPayload.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async singIn(emailOrPhone: string, pass: string): Promise<string> {
    const user = await this.validateUser(emailOrPhone, pass);
    const token = this.generateToken(user);
    return token;
  }

  async validateUser(emailOrPhone: string, pass: string): Promise<any> {
    const user = await this.usersService.validateUser(emailOrPhone);
    if (!user) {
      throw new UnauthorizedException('by email or phone');
    }
    if (user.password !== pass) {
      throw new UnauthorizedException('by email or phone');
    }
    const result = user;
    delete result.password;
    return result;
  }

  async generateToken(user: User): Promise<string> {
    const payload: JWTPayload = {
      id: user.id,
      email: user.email,
    };

    const token = await this.jwtService.signAsync(payload, { secret: jwtSecret});
    return token;
  }

  async verifyToken(payload: JWTPayload) {
    return this.usersService.validateJWTPayload(payload);
  }
}
