import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSpentDto } from './dto/create-spent.dto';
import { UpdateSpentDto } from './dto/update-spent.dto';
import { Spent } from './entities/spent.entity';

@Injectable()
export class SpentService {
  constructor(
    @InjectModel(Spent.name)
    private readonly SpentModel: Model<Spent>,
  ) {}

  create(createSpentDto: CreateSpentDto) {
    createSpentDto.description = createSpentDto.description.trim();
    return createSpentDto;
  }

  findAll() {
    return `This action returns all spent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spent`;
  }

  update(id: number, updateSpentDto: UpdateSpentDto) {
    return `This action updates a #${id} spent`;
  }

  remove(id: number) {
    return `This action removes a #${id} spent`;
  }
}
