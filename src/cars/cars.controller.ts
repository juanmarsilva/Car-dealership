import { Controller, Get, Param, ParseIntPipe, Post, Patch, Delete } from '@nestjs/common';
import { Body, Put } from '@nestjs/common/decorators';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService,     
    ) {}


    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }


    @Get(':id')
    getCarById( @Param('id', ParseIntPipe ) id: number ) {
        return this.carsService.findOneById( id );
    }

    @Post()
    createNewCar( @Body() body: any ) {
        
    }


    @Patch(':id')
    updateCar(
        @Body() body: any, 
        @Param('id', ParseIntPipe ) id: number 
    ) {


        
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe ) id: number ) {


       
    }

}
