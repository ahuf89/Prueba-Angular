import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/mov.interface';
import { Movies } from '../interfaces/movie.interface';
import { Related } from '../interfaces/related.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculasService {
  private baseUrl: string = environment.baseUrl;
  token: string = environment.token;
  uriImage: string = environment.uriImage;

  constructor(private httpClient: HttpClient) { }

  getPeliculas(): Observable<Movies>{
    return this.httpClient.get<Movies>(`${this.baseUrl}/movie/top_rated?api_key=1865f43a0549ca50d341dd9ab8b29f49&language=es-Es&page=2`);
  }
  getPeliculaPorId(id: string): Observable<Movie>{
    return this.httpClient.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.token}&language=es-Es&page=2`);
  }
  getSimilarId(id: string): Observable<Related>{
    return this.httpClient.get<Related>(`${this.baseUrl}/movie/${id}/similar?api_key=${this.token}&language=es-Es&page=1`);
  }

}
