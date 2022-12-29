import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JWTPayload } from 'src/auth/JWTPayload.model';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number): Promise<User> {
    const qb = User.createQueryBuilder('user');
    qb.where('user.id = :id', { id });
    return qb.getOne();
  }

  validateUser(emailOrPhone: string): Promise<User> {
    const qb = User.createQueryBuilder('user');
    qb.where('user.email = :emailOrPhone', { emailOrPhone });
    return qb.getOne();
  }

  validateJWTPayload(payload: JWTPayload): Promise<User> {
    const { id } = payload;
    return this.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
