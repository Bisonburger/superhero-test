import { Injectable } from '@angular/core';

import { SuperHero } from './super-hero.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SuperHeroService {

  readonly BASE_URL = 'https://akabab.github.io/superhero-api/api';

  constructor( private readonly http: HttpClient ) {}

  findAll(): Observable<SuperHero[]>{
    return this.http.get<SuperHero[]>( `${this.BASE_URL}/all.json` );
  }

  findOne( searchId: string ): Observable<SuperHero>{
    return this.http.get<SuperHero>( `${this.BASE_URL}/id/${searchId}.json` );
  }

}
