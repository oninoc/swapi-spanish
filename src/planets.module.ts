import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PlanetController } from './planets.controller';
import { PlanetService } from './planets.service';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [PlanetController],
  providers: [PlanetService],
})
export class PlanetModule {}
