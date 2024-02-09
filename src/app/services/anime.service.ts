import {inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AnimeInterface} from "../interfaces/anime.interface";

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private baseUrl=environment.baseUrl;
  private apiUrl= '/api/animes';
  private http=inject(HttpClient);
  constructor() { }

  public count():Observable<number>{
    return this.http.get<number>(`${this.baseUrl}${this.apiUrl}/count`);
  }
  public findAll():Observable<AnimeInterface[]>{
    return this.http.get<AnimeInterface[]>(`${this.baseUrl}${this.apiUrl}`);
  }

  public findByTitle(title:String):Observable<AnimeInterface[]>{
    return this.http.get<AnimeInterface[]>(`${this.baseUrl}${this.apiUrl}/find-title/${title}`);
  }

  public findByPremiered(premiered:String):Observable<AnimeInterface[]>{
    return this.http.get<AnimeInterface[]>(`${this.baseUrl}${this.apiUrl}/find-premiered/${premiered}`);
  }

  public findByStatus(status:String):Observable<AnimeInterface[]>{
    return this.http.get<AnimeInterface[]>(`${this.baseUrl}${this.apiUrl}/find-status/${status}`);
  }

  public findByRating(rating:String):Observable<AnimeInterface[]>{
    return this.http.get<AnimeInterface[]>(`${this.baseUrl}${this.apiUrl}/find-rating/${rating}`);
  }

  public findFirst():Observable<AnimeInterface>{
    return this.http.get<AnimeInterface>(`${this.baseUrl}${this.apiUrl}/first`);
  }

  public findByPosition(position:number):Observable<AnimeInterface>{
    return this.http.get<AnimeInterface>(`${this.baseUrl}${this.apiUrl}/find-position/${position}`);
  }

  public findBetweenScoreRange(min:number,max:number):Observable<AnimeInterface[]>{
    return this.http.get<AnimeInterface[]>(`${this.baseUrl}${this.apiUrl}/range-score/${min}/${max}`);
  }

  public getAverageScore():Observable<number>{
    return this.http.get<number>(`${this.baseUrl}${this.apiUrl}/average/score`);
  }

  public findMostVoted():Observable<AnimeInterface>{
    return this.http.get<AnimeInterface>(`${this.baseUrl}${this.apiUrl}/most/voted`);
  }

  public findLeastVoted():Observable<AnimeInterface>{
    return this.http.get<AnimeInterface>(`${this.baseUrl}${this.apiUrl}/least/voted`);
  }

  public findMostPopular():Observable<AnimeInterface>{
    return this.http.get<AnimeInterface>(`${this.baseUrl}${this.apiUrl}/most/popular`);
  }

  public findLeastPopular():Observable<AnimeInterface>{
    return this.http.get<AnimeInterface>(`${this.baseUrl}${this.apiUrl}/least/popular`);
  }

  public findMostEpisodes():Observable<AnimeInterface>{
    return this.http.get<AnimeInterface>(`${this.baseUrl}${this.apiUrl}/most/episodes`);
  }

  public findLeastEpisodes():Observable<AnimeInterface>{
    return this.http.get<AnimeInterface>(`${this.baseUrl}${this.apiUrl}/least/episodes`);
  }

  public findEpisodesEven():Observable<AnimeInterface[]>{
    return this.http.get<AnimeInterface[]>(`${this.baseUrl}${this.apiUrl}/episodes/even`);
  }

  public findEpisodesOdd():Observable<AnimeInterface[]>{
    return this.http.get<AnimeInterface[]>(`${this.baseUrl}${this.apiUrl}/episodes/odd`);
  }

  public findBySource(source:String):Observable<AnimeInterface[]>{
    return this.http.get<AnimeInterface[]>(`${this.baseUrl}${this.apiUrl}/source/${source}`);
  }

  public mostRepeatRating():Observable<string>{
    return this.http.get<string>(`${this.baseUrl}${this.apiUrl}/most/repeat/rating`);
  }

  public leastRepeatRating():Observable<string>{
    return this.http.get<string>(`${this.baseUrl}${this.apiUrl}/least/repeat/rating`);
  }

  public findDurationMax():Observable<AnimeInterface>{
    return this.http.get<AnimeInterface>(`${this.baseUrl}${this.apiUrl}/duration/max`);
  }

  public findDurationMin():Observable<AnimeInterface>{
    return this.http.get<AnimeInterface>(`${this.baseUrl}${this.apiUrl}/duration/min`);
  }

  public findNewestAired():Observable<AnimeInterface>{
    return this.http.get<AnimeInterface>(`${this.baseUrl}${this.apiUrl}/aired/newest`);
  }

  public findOldestAired():Observable<AnimeInterface>{
    return this.http.get<AnimeInterface>(`${this.baseUrl}${this.apiUrl}/aired/oldest`);
  }

  public findAllStudios():Observable<String[]>{
    return this.http.get<String[]>(`${this.baseUrl}${this.apiUrl}/studios/all`);
  }

  public findAllSources():Observable<String[]>{
    return this.http.get<String[]>(`${this.baseUrl}${this.apiUrl}/sources/all`);
  }

  public findAllRating():Observable<String[]>{
    return this.http.get<String[]>(`${this.baseUrl}${this.apiUrl}/rating/all`);
  }

  public findWithoutLicensors():Observable<AnimeInterface[]>{
    return this.http.get<AnimeInterface[]>(`${this.baseUrl}${this.apiUrl}/licensors/without`);
  }

  public findWithoutStudios():Observable<AnimeInterface[]>{
    return this.http.get<AnimeInterface[]>(`${this.baseUrl}${this.apiUrl}/studios/without`);
  }
}
