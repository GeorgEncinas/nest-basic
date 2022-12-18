import { Injectable } from '@nestjs/common';
import { CreateCalculatorDto } from './dto/create-calculator.dto';
import { UpdateCalculatorDto } from './dto/update-calculator.dto';

@Injectable()
export class CalculatorService {
  create(createCalculatorDto: CreateCalculatorDto) {
    return 'This action adds a new calculator';
  }

  findAll() {
    return `This action returns all calculator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calculator`;
  }

  update(id: number, updateCalculatorDto: UpdateCalculatorDto) {
    return `This action updates a #${id} calculator`;
  }

  remove(id: number) {
    return `This action removes a #${id} calculator`;
  }
}
