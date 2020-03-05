import { Action, createReducer, on } from '@ngrx/store';
import * as ActionTypes from './super-hero.actions';
import { SuperHero } from './super-hero.model';

export const taskFeatureKey = 'SuperHero';

/**
 * State data for the SuperHeroAPI
 *
 */
export interface State {
  heroes: SuperHero[];
  error: boolean;
  errorMsg: string;
}

export const initialState: State = {
    heroes: [],
    error: false,
    errorMsg: undefined
};

const taskReducer = createReducer(
    initialState,
    on(ActionTypes.success_loadSuperHeroesAction, (state, { heroes }) => ({
        ...state,
        heroes,
        error: false
    })),
    on(ActionTypes.fail_loadSuperHeroesAction, ( state, {error} ) => ({
      ...state,
      heroes: [],
      error: true,
      errorMsg: error
    })),
);

/**
 * Wrapper function for the taskReducer and the angular bootstrap process
 *  does not accept arrow functions as produced by createReducer
 *
 * @export
 */
// tslint:disable-next-line:typedef
export function reducer(state: State | undefined, action: Action) {
    return taskReducer(state, action);
}
