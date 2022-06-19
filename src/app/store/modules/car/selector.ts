import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCar from './reducer';

export const selectCarState =
  createFeatureSelector<fromCar.State>(
    fromCar.carFeatureKey
  );

export const getCar = createSelector(
  selectCarState,
  state => state.cars
);
