import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
    private service: MessageService) { }

  /**
   * Log a HeroService message with the MessageService
   */
  private log(message: string) {
    this.service.add('HeroService: ' + message);
  }

  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero ${name}`)
    ));
  }
}
