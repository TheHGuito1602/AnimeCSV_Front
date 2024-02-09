import {Component, inject} from '@angular/core';
import {AnimeService} from "../services/anime.service";
import {AnimeInterface} from "../interfaces/anime.interface";
import {last} from "rxjs";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {
  private animeService=inject(AnimeService);

  animeA:any[]=[]
  animeB:any[]=[]
  animeC:any[]=[]

  constructor() { }

  ngOnInit(): void {
    this.obtenerInformacionAnimeA();
    this.obtenerInformacionAnimeB();
    this.obtenerInformacionAnimeC();

  }

  private obtenerInformacionAnimeA(): void {
    this.animeService.findAllSources().subscribe(
      (anime) => {
        this.animeA = anime;
      },
      (error) => {
        console.error('Error al obtener información de Anime A:', error);
      }
    );
  }

  private obtenerInformacionAnimeB(): void {
    this.animeService.findAllStudios().subscribe(
      (anime) => {
        this.animeB = anime;
      },
      (error) => {
        console.error('Error al obtener información de Anime B:', error);
      }
    );
  }

  private obtenerInformacionAnimeC(): void {
    this.animeService.findAllRaiting().subscribe(
      (anime) => {
        this.animeC = anime;
      },
      (error) => {
        console.error('Error al obtener información de Anime C:', error);
      }
    );
  }

  protected readonly last = last;
}
