import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from "../../environments/environment"
import * as fromCar from './modules/car/reducer';

export interface AppState {
  [fromCar.carFeatureKey]: fromCar.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromCar.carFeatureKey]:
    fromCar.carReducer
};

export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [debug] : [];


function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.debug('state', state);
    console.debug('action', action);
  
    return reducer(state, action);
  };
}