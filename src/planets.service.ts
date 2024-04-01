import { Injectable } from '@nestjs/common';
import {
  EPlanetAPI,
  SPlanetAPI,
  EKeyPlanet,
  SKeyPlanet,
  PlanetServiceInterface,
} from './interfaces/planets';
import { ConfigService } from '@nestjs/config';
import { dynamo } from './config/database';
import { v4 } from 'uuid';

@Injectable()
export class PlanetService implements PlanetServiceInterface {
  endpoint: string = 'planets';
  url: string;

  constructor(private configService: ConfigService) {
    this.url = this.configService.get<string>('swapi') + this.endpoint;
  }

  getPlanets(): Promise<SPlanetAPI> {
    const planets = new Promise<SPlanetAPI>((resolve, reject) => {
      fetch(this.url)
        .then((res) => res.json())
        .then((res) => this.translatePlanets(res))
        .then((json) => resolve(json))
        .catch((err) => reject(err));
    });

    return planets;
  }

  getPlanetById(id: number): Promise<SKeyPlanet> {
    const planet = new Promise<SKeyPlanet>((resolve, reject) => {
      fetch(`${this.url}/${id}/`)
        .then((res) => res.json())
        .then((res) => this.translatePlanet(res))
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });

    return planet;
  }

  translatePlanet(planet: EKeyPlanet): SKeyPlanet {
    const translatedPlanet: SKeyPlanet = {
      nombre: planet.name,
      periodo_rotacion: planet.rotation_period,
      periodo_orbital: planet.orbital_period,
      diametro: planet.diameter,
      clima: planet.climate,
      gravedad: planet.gravity,
      terreno: planet.terrain,
      agua_superficial: planet.surface_water,
      poblacion: planet.population,
      residentes: planet.residents,
      peliculas: planet.films,
      creado: planet.created,
      editado: planet.edited,
      url: planet.url,
    };

    return translatedPlanet;
  }

  translatePlanets(planets: EPlanetAPI): SPlanetAPI {
    const translatedPlanets: SPlanetAPI = {
      count: planets.count,
      next: planets.next,
      previous: planets.previous,
      results: planets.results.map((planet) => this.translatePlanet(planet)),
    };

    return translatedPlanets;
  }

  async savePlanet(planet: SKeyPlanet) {
    planet.creado = new Date().toISOString();
    planet.id !== undefined ? planet.id : v4();

    try {
      await dynamo.put({
        TableName: this.configService.get<string>('table'),
        Item: planet,
      }).promise();
      return planet;
    } catch (error) {
      throw new Error(error.message);
    }
  }

}
