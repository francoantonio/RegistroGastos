import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpentModule } from './spent/spent.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    SpentModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
