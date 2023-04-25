import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    model: 'Toyota',
    brand: 'Corolla',
  },
  {
    id: uuid(),
    model: 'Audi',
    brand: 'A5',
  },
  {
    id: uuid(),
    model: 'BMW',
    brand: '330i',
  },
  {
    id: uuid(),
    model: 'Mercedes Benz',
    brand: 'e350 AMG',
  },
];
