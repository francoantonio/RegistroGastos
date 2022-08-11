import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Spent extends Document {
  @Prop({
    unique: false,
    index: true,
  })
  category: Array<string>;

  @Prop({
    unique: false,
  })
  description: string;
  @Prop({
    unique: false,
    type: Date,
    default: Date.now,
  })
  date: string;
}

export const SpentSchema = SchemaFactory.createForClass(Spent);
