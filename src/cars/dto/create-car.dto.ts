import { IsString /* MinLength */ } from 'class-validator';

export class CreateCarDto {
  @IsString(/* { message: `set a custom message `} */)
  readonly brand: string;

  @IsString()
  // @MinLength(3)
  readonly model: string;
}
