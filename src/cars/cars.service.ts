import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateCarDto, UpdateCarDto } from './dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with ID: ${id} is not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(car);

    return car;
  }

  update(updateCarDto: UpdateCarDto, id: string) {
    const car = this.findOneById(id);

    // if( updateCarDto.id && updateCarDto.id !== id ) throw new BadRequestException('Car id is not valid inside body');

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        car = { ...car, ...updateCarDto, id };

        return car;
      }
    });

    return car;
  }

  delete(id: string) {
    // const car = this.findOneById(id);

    this.cars = this.cars.filter((car) => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
