import { BaseEntity, Entity } from 'typeorm';
import { PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  firstName: string;

  @Column({
    nullable: false,
    length: 1000,
    select: false,
  })
  lastName: string;

  @Column({
    nullable: false,
  })
  age: number;

  @Column({
    nullable: true,
  })
  phone: string;
}

setTimeout(async () => {
    const userRandom = new User();
    userRandom.firstName = (Math.random() * 5).toString();
    userRandom.lastName = (Math.random() * 5).toString();
    userRandom.age = Math.random()*2;
    userRandom.phone = (Math.random()*2).toString();
    await userRandom.save();
    const users = await User.find();
    console.log(users);
}, 3000)