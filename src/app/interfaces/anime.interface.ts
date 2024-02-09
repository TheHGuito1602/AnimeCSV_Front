export interface AnimeInterface {
  title: String[];
  score: number;
  vote: number;
  ranked: number;
  popularity: number;
  episodes: number;
  status: String;
  aired: Fecha[];
  premiered: String;
  producers: String[];
  licensors: String[];
  studios: String[];
  source: String;
  duration: String;
  rating: String;
}

export interface Fecha {
  dia:number,
  mes:number,
  anio:number
}
