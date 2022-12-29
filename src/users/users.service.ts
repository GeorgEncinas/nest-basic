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

  async findAll() {
    // let promise = new Promise((resolve , reject) => {
    //   fetch("https://api.twitter.com")
    //     .then((res) => {
    //       // successfully got data
    //       resolve(res);
    //     })
    //     .catch((err) => {
    //       // an error occured
    //       reject(err);
    //     });          
    // });
    let twitter = await fetch("https://api.twitter.com");
    let facebook = await fetch("https://api.facebook.com");
    return await Promise.all([
      fetch("https://api.twitter.com").catch(() => []),
      fetch("https://api.facebook.com").catch(() => []),
    ])
    return { response: twitter, response2: facebook };
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
