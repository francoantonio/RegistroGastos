import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpentModule } from './spent/spent.module';

@Module({
  imports: [
    SpentModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
