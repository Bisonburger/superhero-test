import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as SuperHeroActions from './super-hero.actions';
import { SuperHeroService } from './super-hero.service';
import { SuperHero } from './super-hero.model';

@Injectable()
export class SuperHeroEffects {


  LoadSuperHeroes$: Observable<Action> = createEffect( () =>
    this.actions$.pipe(
      ofType( SuperHeroActions.loadSuperHeroesAction ),
      switchMap( action =>
        this.superheroSvc.findAll().pipe(
          map( (heroes: SuperHero[]) => SuperHeroActions.success_loadSuperHeroesAction( {heroes} ) )
        )
      )
    )
  );

  LoadSuperHero$: Observable<Action> = createEffect( () =>
    this.actions$.pipe(
      ofType( SuperHeroActions.loadSuperHeroAction ),
      switchMap( action =>
        this.superheroSvc.findOne( action.heroId ).pipe(
          map( (hero: SuperHero) => SuperHeroActions.success_loadSuperHeroAction( {hero} ) )
        )
      )
    )
  );

    constructor(private readonly superheroSvc: SuperHeroService, private readonly actions$: Actions) {
    }
}
