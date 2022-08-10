import { Module } from '@nestjs/common';
import { SpentModule } from './spent/spent.module';

@Module({
  imports: [SpentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
