import {
  Controller,
  Get,
  Post,
  Param,
  Body
} from '@nestjs/common';
import { PlanetService } from './planets.service';
import { CreatePlanetDto } from './dto/create-planet.dto';

@Controller('planetas')
export class PlanetController {
  constructor(private readonly appService: PlanetService) {}

  @Get()
  getAll(): object {
    return this.appService.getPlanets();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.appService.getPlanetById(id);
  }

  @Post()
  createPlanet(@Body() CreatePlanetDto: CreatePlanetDto) {
    return this.appService.savePlanet(CreatePlanetDto);
  }

}
