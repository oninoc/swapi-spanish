export class CreatePlanetDto {
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
