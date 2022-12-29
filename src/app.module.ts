import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CalculatorModule } from './calculator/calculator.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

export const jwtSecret = 'hard!to-guess_secret';
@Module({
  imports: [
    JwtModule.register({ secret: jwtSecret }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    CalculatorModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
