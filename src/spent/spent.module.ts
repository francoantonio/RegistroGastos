import { Module } from '@nestjs/common';
import { SpentService } from './spent.service';
import { SpentController } from './spent.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SpentSchema, Spent } from './entities/spent.entity';

@Module({
  controllers: [SpentController],
  providers: [SpentService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Spent.name,
        schema: SpentSchema,
      },
    ]),
  ],
})
export class SpentModule {}
