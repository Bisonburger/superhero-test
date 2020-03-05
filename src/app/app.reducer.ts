import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as SuperHeroApi from './super-hero/store/super-hero.reducer';

export interface State {
  superhero: SuperHeroApi.State;
}

export const reducers: ActionReducerMap<State> = {
  superhero: SuperHeroApi.reducer,
};

// tslint:disable-next-line:array-type
export const metaReducers: MetaReducer<State>[] = [];
