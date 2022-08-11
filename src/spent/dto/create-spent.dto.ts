import { IsArray, IsString, MinLength } from 'class-validator';

export class CreateSpentDto {
  @IsArray()
  category: Array<string>;

  @MinLength(5)
  @IsString()
  description: string;
}
