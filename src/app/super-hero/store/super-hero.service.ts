import { Injectable } from '@angular/core';

import { SuperHero } from './super-hero.model';
import { Observable, of } from 'rxjs';

import { superHeroes } from '../super-hero.data';

@Injectable({ providedIn: 'root' })
export class SuperHeroService{
  findAll(): Observable<SuperHero[]>{
    return of( superHeroes );
  }

  findOne( searchId: string ): Observable<SuperHero>{
    return of( superHeroes.find( ({id}) => id === searchId ) );
  }

  save( superhero: SuperHero ): void{
    superHeroes.push( superhero );
  }
}
