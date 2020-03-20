import { Injectable } from '@angular/core';

import { SuperHero } from './super-hero.model';
import { Observable, of, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SuperHeroService {

  constructor( private readonly http: HttpClient ) {}

  findAll(): Observable<SuperHero[]>{
    return this.http.get<SuperHero[]>( `https://akabab.github.io/superhero-api/api/all.json` );
  }

  findOne( searchId: string ): Observable<SuperHero>{
    return this.http.get<SuperHero>( `https://akabab.github.io/superhero-api/api/id/${searchId}.json` );
  }

}
