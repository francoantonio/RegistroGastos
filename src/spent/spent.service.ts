import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateSpentDto } from './dto/create-spent.dto';
import { UpdateSpentDto } from './dto/update-spent.dto';
import { Spent } from './entities/spent.entity';

@Injectable()
export class SpentService {
  constructor(
    @InjectModel(Spent.name)
    private readonly SpentModel: Model<Spent>,
  ) {}

  async create(createSpentDto: CreateSpentDto) {
    createSpentDto.category = createSpentDto.category.map((cat) => {
      return cat.toLowerCase();
    });
    createSpentDto.description = createSpentDto.description.trim();

    try {
      const spent = await this.SpentModel.create(createSpentDto);
      return spent;
    } catch (err) {
      if (err.code === 11000) {
        throw new BadRequestException(`Error al crear un Spent`);
      }
      console.log(err);
      throw new InternalServerErrorException(
        'cant create Spent - Check server logs',
      );
    }
  }

  findAll() {
    return this.SpentModel.find();
  }

  async findOne(id: string) {
    let spent: Spent;
    if (isValidObjectId(id)) {
      spent = await this.SpentModel.findById(id);
    }

    if (!spent) throw new NotFoundException(`spent with id,${id} not found`);
    return spent;
  }

  async update(id: string, updateSpentDto: UpdateSpentDto) {
    const spent = await this.findOne(id);
    if (spent) {
      await spent.updateOne(updateSpentDto);
    }
    return { ...spent.toJSON(), ...updateSpentDto };
  }

  async remove(id: string) {
    return { id };
  }
}
