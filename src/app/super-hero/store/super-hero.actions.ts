import { createAction, props } from '@ngrx/store';
import { SuperHero } from './super-hero.model';

export const loadSuperHeroesAction = createAction('[SuperHero] Load All' );
export const success_loadSuperHeroesAction = createAction('[SuperHero] Load All Success', props<{ heroes: SuperHero[] }>());
export const fail_loadSuperHeroesAction = createAction('[SuperHero] Load All Fail', props<{ error: string }>());

export const loadSuperHeroAction = createAction('[SuperHero] Load One' );
export const success_loadSuperHeroAction = createAction('[SuperHero] Load One Success', props<{ heroes: SuperHero[] }>());
export const fail_loadSuperHeroAction = createAction('[SuperHero] Load One Fail', props<{ error: string }>());

export const saveSuperHeroAction = createAction('[SuperHero] Save');
