import {Component, inject, OnInit} from '@angular/core';
import {AnimeInterface, Fecha} from "../interfaces/anime.interface";
import {AnimeService} from "../services/anime.service";
import {last} from "rxjs";
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  private animeService=inject(AnimeService);

  public animeA: AnimeInterface = {} as AnimeInterface;
  public animeB: AnimeInterface = {} as AnimeInterface;
  public animeC: AnimeInterface = {} as AnimeInterface;
  public animeD: AnimeInterface = {} as AnimeInterface;
  public animeE: AnimeInterface = {} as AnimeInterface;
  public animeF: AnimeInterface = {} as AnimeInterface;
  public animeG: AnimeInterface = {} as AnimeInterface;
  public animeH: AnimeInterface = {} as AnimeInterface;
  public animeI: AnimeInterface = {} as AnimeInterface;
  public animeJ: AnimeInterface = {} as AnimeInterface;
  public animeK: AnimeInterface = {} as AnimeInterface;
  cuadroStringA: String = '';
  cuadroStringB: String = '';
  cuadroString: String = '';

  cuadroNumber1: number = 0;
  cuadroNumber2: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.obtenerInformacionAnimeA();
    this.obtenerInformacionAnimeB();
    this.obtenerInformacionAnimeC();
    this.obtenerInformacionAnimeD();
    this.obtenerInformacionAnimeE();
    this.obtenerInformacionAnimeF();
    this.obtenerInformacionAnimeG();
    this.obtenerInformacionAnimeH();
    this.obtenerInformacionAnimeI();
    this.obtenerInformacionAnimeJ();
    this.obtenerInformacionAnimeK();
    this.configurarCuadroStringA();
    this.configurarCuadroStringB();
    this.configurarCuadroNumber1();
    this.configurarCuadroNumber2();
  }

  private obtenerInformacionAnimeA(): void {
    this.animeService.findMostEpisodes().subscribe(
      (anime) => {
        this.animeA = anime;
      },
      (error) => {
        console.error('Error al obtener información de Anime A:', error);
      }
    );
  }


  private obtenerInformacionAnimeB(): void {
    this.animeService.findMostPopular().subscribe(
      (anime) => {
        this.animeB = anime;
      },
      (error) => {
        console.error('Error al obtener información de Anime B:', error);
      }
    );
  }

  private obtenerInformacionAnimeC(): void {
    this.animeService.findMostVoted().subscribe(
      (anime) => {
        this.animeC = anime;
      },
      (error) => {
        console.error('Error al obtener información de Anime C:', error);
      }
    );
  }
  private obtenerInformacionAnimeD(): void {
    this.animeService.findFirst().subscribe(
      (anime) => {
        this.animeD = anime;
      },
      (error) => {
        console.error('Error al obtener información de Anime C:', error);
      }
    );
  }

  private obtenerInformacionAnimeE(): void {
    this.animeService.findLeastEpisodes().subscribe(
      (anime) => {
        this.animeE = anime;
      },
      (error) => {
        console.error('Error al obtener información de Anime C:', error);
      }
    );
  }

  private obtenerInformacionAnimeF(): void {
    this.animeService.findLeastPopular().subscribe(
      (anime) => {
        this.animeF = anime;
      },
      (error) => {
        console.error('Error al obtener información de Anime C:', error);
      }
    );
  }

  private obtenerInformacionAnimeG(): void {
    this.animeService.findLeastVoted().subscribe(
      (anime) => {
        this.animeG = anime;
      },
      (error) => {
        console.error('Error al obtener información de Anime C:', error);
      }
    );
  }
  private obtenerInformacionAnimeH(): void {
    this.animeService.findDurationMax().subscribe(
      (anime) => {
        this.animeH = anime;
      },
      (error) => {
        console.error('Error al obtener información de Anime C:', error);
      }
    );
  }

  private obtenerInformacionAnimeI(): void {
    this.animeService.findDurationMin().subscribe(
      (anime) => {
        this.animeI = anime;
      },
      (error) => {
        console.error('Error al obtener información de Anime C:', error);
      }
    );
  }

  private obtenerInformacionAnimeJ(): void {
    this.animeService.findNewestAired().subscribe(
      (anime) => {
        this.animeJ = anime;
      },
      (error) => {
        console.error('Error al obtener información de Anime C:', error);
      }
    );
  }

  private obtenerInformacionAnimeK(): void {
    this.animeService.findOldestAired().subscribe(
      (anime) => {
        this.animeK = anime;
      },
      (error) => {
        console.error('Error al obtener información de Anime C:', error);
      }
    );
  }
  private configurarCuadroStringA(): void {
    this.animeService.leastRepeatRating().subscribe(
      (informacion) => {
        this.cuadroString = informacion;
      },
      (error) => {
        console.error('Error al obtener información string:', error);
      }
    );
  }
  private configurarCuadroStringB(): void {
    this.animeService.mostRepeatRating().subscribe(
      (informacion) => {
        this.cuadroString = informacion;
      },
      (error) => {
        console.error('Error al obtener información string:', error);
      }
    );
  }

  private configurarCuadroNumber1(): void {
    this.animeService.count().subscribe(
      (numero) => {
        this.cuadroNumber1 = numero;
      },
      (error) => {
        console.error('Error al obtener número:', error);
      }
    );
  }

  private configurarCuadroNumber2(): void {
    this.animeService.getAverageScore().subscribe(
      (numero) => {
        this.cuadroNumber2 = numero;
      },
      (error) => {
        console.error('Error al obtener número:', error);
      }
    );
  }

  getFormattedAiredDate(aired: Fecha[]): string {
    if (!aired || aired.length === 0) {
      return 'N/A'; // O cualquier valor predeterminado para indicar que no hay fecha disponible.
    }

    // Mapear cada objeto Fecha en el array a una cadena formateada.
    const formattedDates = aired.map((fecha) => this.formatDate(fecha));

    return formattedDates.join(' - '); // Unir las fechas formateadas con una coma y un espacio.
  }

  formatDate(fecha: Fecha): string {
    // Verificar si falta día, mes o año y mostrar "??"
    const formattedDay = fecha && fecha.dia != null ? fecha.dia : '??';
    const formattedMonth = fecha && fecha.mes != null ? fecha.mes : '??';
    const formattedYear = fecha && fecha.anio != null ? fecha.anio : '????';

    return `${formattedDay}/${formattedMonth}/${formattedYear}`;
  }

  parseISO8601Duration(duration: String): string {
    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?/;
    const match = duration.match(regex);

    if (!match) {
      return 'N/A';
    }

    const hours = match[1] ? `${match[1]}H` : '';
    const minutes = match[2] ? `${match[2]}M` : '';

    return `${hours}${minutes}`;
  }

  protected readonly last = last;
}
