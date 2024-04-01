import { Test } from '@nestjs/testing';
import { PlanetController } from './planets.controller';
import { PlanetService } from './planets.service';
import configuration from './config/configuration';
import { ConfigModule } from '@nestjs/config';
import { CreatePlanetDto } from './dto/create-planet.dto';

describe('PlanetController', () => {
  let planetsController: PlanetController;
  let planetsService: PlanetService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        imports: [
          ConfigModule.forRoot({
            load: [configuration],
          }),
        ],
        controllers: [PlanetController],
        providers: [PlanetService],
      }).compile();

    planetsService = moduleRef.get<PlanetService>(PlanetService);
    planetsController = moduleRef.get<PlanetController>(PlanetController);
  });

  describe('getAll', () => {
    it('should return an array of planets', async () => {
      const result = {
        "count": 60,
        "next": "https://swapi.dev/api/planets/?page=2",
        "previous": null,
        "results": [
          {
            "nombre": "Tatooine",
            "periodo_rotacion": "23",
            "periodo_orbital": "304",
            "diametro": "10465",
            "clima": "arid",
            "gravedad": "1 standard",
            "terreno": "desert",
            "agua_superficial": "1",
            "poblacion": "200000",
            "residentes": [
              "https://swapi.dev/api/people/1/",
              "https://swapi.dev/api/people/2/",
              "https://swapi.dev/api/people/4/",
              "https://swapi.dev/api/people/6/",
              "https://swapi.dev/api/people/7/",
              "https://swapi.dev/api/people/8/",
              "https://swapi.dev/api/people/9/",
              "https://swapi.dev/api/people/11/",
              "https://swapi.dev/api/people/43/",
              "https://swapi.dev/api/people/62/"
            ],
            "peliculas": [
              "https://swapi.dev/api/films/1/",
              "https://swapi.dev/api/films/3/",
              "https://swapi.dev/api/films/4/",
              "https://swapi.dev/api/films/5/",
              "https://swapi.dev/api/films/6/"
            ],
            "creado": "2014-12-09T13:50:49.641000Z",
            "editado": "2014-12-20T20:58:18.411000Z",
            "url": "https://swapi.dev/api/planets/1/"
          },
          {
            "nombre": "Alderaan",
            "periodo_rotacion": "24",
            "periodo_orbital": "364",
            "diametro": "12500",
            "clima": "temperate",
            "gravedad": "1 standard",
            "terreno": "grasslands, mountains",
            "agua_superficial": "40",
            "poblacion": "2000000000",
            "residentes": [
              "https://swapi.dev/api/people/5/",
              "https://swapi.dev/api/people/68/",
              "https://swapi.dev/api/people/81/"
            ],
            "peliculas": [
              "https://swapi.dev/api/films/1/",
              "https://swapi.dev/api/films/6/"
            ],
            "creado": "2014-12-10T11:35:48.479000Z",
            "editado": "2014-12-20T20:58:18.420000Z",
            "url": "https://swapi.dev/api/planets/2/"
          },
          {
            "nombre": "Yavin IV",
            "periodo_rotacion": "24",
            "periodo_orbital": "4818",
            "diametro": "10200",
            "clima": "temperate, tropical",
            "gravedad": "1 standard",
            "terreno": "jungle, rainforests",
            "agua_superficial": "8",
            "poblacion": "1000",
            "residentes": [

            ],
            "peliculas": [
              "https://swapi.dev/api/films/1/"
            ],
            "creado": "2014-12-10T11:37:19.144000Z",
            "editado": "2014-12-20T20:58:18.421000Z",
            "url": "https://swapi.dev/api/planets/3/"
          },
          {
            "nombre": "Hoth",
            "periodo_rotacion": "23",
            "periodo_orbital": "549",
            "diametro": "7200",
            "clima": "frozen",
            "gravedad": "1.1 standard",
            "terreno": "tundra, ice caves, mountain ranges",
            "agua_superficial": "100",
            "poblacion": "unknown",
            "residentes": [

            ],
            "peliculas": [
              "https://swapi.dev/api/films/2/"
            ],
            "creado": "2014-12-10T11:39:13.934000Z",
            "editado": "2014-12-20T20:58:18.423000Z",
            "url": "https://swapi.dev/api/planets/4/"
          },
          {
            "nombre": "Dagobah",
            "periodo_rotacion": "23",
            "periodo_orbital": "341",
            "diametro": "8900",
            "clima": "murky",
            "gravedad": "N/A",
            "terreno": "swamp, jungles",
            "agua_superficial": "8",
            "poblacion": "unknown",
            "residentes": [

            ],
            "peliculas": [
              "https://swapi.dev/api/films/2/",
              "https://swapi.dev/api/films/3/",
              "https://swapi.dev/api/films/6/"
            ],
            "creado": "2014-12-10T11:42:22.590000Z",
            "editado": "2014-12-20T20:58:18.425000Z",
            "url": "https://swapi.dev/api/planets/5/"
          },
          {
            "nombre": "Bespin",
            "periodo_rotacion": "12",
            "periodo_orbital": "5110",
            "diametro": "118000",
            "clima": "temperate",
            "gravedad": "1.5 (surface), 1 standard (Cloud City)",
            "terreno": "gas giant",
            "agua_superficial": "0",
            "poblacion": "6000000",
            "residentes": [
              "https://swapi.dev/api/people/26/"
            ],
            "peliculas": [
              "https://swapi.dev/api/films/2/"
            ],
            "creado": "2014-12-10T11:43:55.240000Z",
            "editado": "2014-12-20T20:58:18.427000Z",
            "url": "https://swapi.dev/api/planets/6/"
          },
          {
            "nombre": "Endor",
            "periodo_rotacion": "18",
            "periodo_orbital": "402",
            "diametro": "4900",
            "clima": "temperate",
            "gravedad": "0.85 standard",
            "terreno": "forests, mountains, lakes",
            "agua_superficial": "8",
            "poblacion": "30000000",
            "residentes": [
              "https://swapi.dev/api/people/30/"
            ],
            "peliculas": [
              "https://swapi.dev/api/films/3/"
            ],
            "creado": "2014-12-10T11:50:29.349000Z",
            "editado": "2014-12-20T20:58:18.429000Z",
            "url": "https://swapi.dev/api/planets/7/"
          },
          {
            "nombre": "Naboo",
            "periodo_rotacion": "26",
            "periodo_orbital": "312",
            "diametro": "12120",
            "clima": "temperate",
            "gravedad": "1 standard",
            "terreno": "grassy hills, swamps, forests, mountains",
            "agua_superficial": "12",
            "poblacion": "4500000000",
            "residentes": [
              "https://swapi.dev/api/people/3/",
              "https://swapi.dev/api/people/21/",
              "https://swapi.dev/api/people/35/",
              "https://swapi.dev/api/people/36/",
              "https://swapi.dev/api/people/37/",
              "https://swapi.dev/api/people/38/",
              "https://swapi.dev/api/people/39/",
              "https://swapi.dev/api/people/42/",
              "https://swapi.dev/api/people/60/",
              "https://swapi.dev/api/people/61/",
              "https://swapi.dev/api/people/66/"
            ],
            "peliculas": [
              "https://swapi.dev/api/films/3/",
              "https://swapi.dev/api/films/4/",
              "https://swapi.dev/api/films/5/",
              "https://swapi.dev/api/films/6/"
            ],
            "creado": "2014-12-10T11:52:31.066000Z",
            "editado": "2014-12-20T20:58:18.430000Z",
            "url": "https://swapi.dev/api/planets/8/"
          },
          {
            "nombre": "Coruscant",
            "periodo_rotacion": "24",
            "periodo_orbital": "368",
            "diametro": "12240",
            "clima": "temperate",
            "gravedad": "1 standard",
            "terreno": "cityscape, mountains",
            "agua_superficial": "unknown",
            "poblacion": "1000000000000",
            "residentes": [
              "https://swapi.dev/api/people/34/",
              "https://swapi.dev/api/people/55/",
              "https://swapi.dev/api/people/74/"
            ],
            "peliculas": [
              "https://swapi.dev/api/films/3/",
              "https://swapi.dev/api/films/4/",
              "https://swapi.dev/api/films/5/",
              "https://swapi.dev/api/films/6/"
            ],
            "creado": "2014-12-10T11:54:13.921000Z",
            "editado": "2014-12-20T20:58:18.432000Z",
            "url": "https://swapi.dev/api/planets/9/"
          },
          {
            "nombre": "Kamino",
            "periodo_rotacion": "27",
            "periodo_orbital": "463",
            "diametro": "19720",
            "clima": "temperate",
            "gravedad": "1 standard",
            "terreno": "ocean",
            "agua_superficial": "100",
            "poblacion": "1000000000",
            "residentes": [
              "https://swapi.dev/api/people/22/",
              "https://swapi.dev/api/people/72/",
              "https://swapi.dev/api/people/73/"
            ],
            "peliculas": [
              "https://swapi.dev/api/films/5/"
            ],
            "creado": "2014-12-10T12:45:06.577000Z",
            "editado": "2014-12-20T20:58:18.434000Z",
            "url": "https://swapi.dev/api/planets/10/"
          }
        ]
      }
      expect(await planetsController.getAll()).toStrictEqual(result);
    });
  });

  describe('getById', () => {
    it('should return a planet', async () => {
      const result = {
        "nombre": "Tatooine",
        "periodo_rotacion": "23",
        "periodo_orbital": "304",
        "diametro": "10465",
        "clima": "arid",
        "gravedad": "1 standard",
        "terreno": "desert",
        "agua_superficial": "1",
        "poblacion": "200000",
        "residentes": [
          "https://swapi.dev/api/people/1/",
          "https://swapi.dev/api/people/2/",
          "https://swapi.dev/api/people/4/",
          "https://swapi.dev/api/people/6/",
          "https://swapi.dev/api/people/7/",
          "https://swapi.dev/api/people/8/",
          "https://swapi.dev/api/people/9/",
          "https://swapi.dev/api/people/11/",
          "https://swapi.dev/api/people/43/",
          "https://swapi.dev/api/people/62/"
        ],
        "peliculas": [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/4/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/"
        ],
        "creado": "2014-12-09T13:50:49.641000Z",
        "editado": "2014-12-20T20:58:18.411000Z",
        "url": "https://swapi.dev/api/planets/1/"
      }
      expect(await planetsController.getById(1)).toStrictEqual(result);
    });
  })

  describe('createPlanet', () => {
    it('should create a planet', async () => {
      const result: CreatePlanetDto = {
        "id": "5470e911-1c25-4f63-977b-705b20ea5df1",
        "nombre": "Tierra Test",
        "periodo_rotacion": 23,
        "periodo_orbital": 304,
        "diametro": 10465,
        "clima": "arid",
        "gravedad": "1 standard",
        "terreno": "desert",
        "agua_superficial": 1,
        "poblacion": 200000,
      }
      expect(await planetsController.createPlanet(result)).toStrictEqual(result);
    })
  })
});
