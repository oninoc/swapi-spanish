export interface EPlanetAPI {
  count: number;
  next: string;
  previous: null;
  results: EKeyPlanet[];
}

export interface EKeyPlanet {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents?: string[];
  films?: string[];
  created: string;
  edited?: string;
  url?: string;
}

export interface SPlanetAPI {
  count: number;
  next: string;
  previous: null;
  results: SKeyPlanet[];
}

export interface SKeyPlanet {
  id?: string;
  nombre: string;
  periodo_rotacion: number;
  periodo_orbital: number;
  diametro: number;
  clima: string;
  gravedad: string;
  terreno: string;
  agua_superficial: number;
  poblacion: number;
  residentes?: string[];
  peliculas?: string[];
  creado?: string;
  editado?: string;
  url?: string;
}

export interface PlanetServiceInterface {
  getPlanets(): Promise<SPlanetAPI>;
  translatePlanets(planets: EPlanetAPI): SPlanetAPI;
}
