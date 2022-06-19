import { createReducer, on } from '@ngrx/store';

import * as CarActions from './actions';
import { iCar } from './types';

export const carFeatureKey = 'car';

export interface State {
  cars: iCar[];
}

export const initialState: State = {
  cars: []
};

export const carReducer = createReducer(
  initialState,
  on(CarActions.loadCarSuccess, (_state, { cars }) => ({ cars }))
);
