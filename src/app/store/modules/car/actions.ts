import { createAction, props } from '@ngrx/store';
import { iCar } from './types';

export const loadCar = createAction(
  '[Car] Load Car'
);

export const loadCarSuccess = createAction(
  '[Car] Load Car Success',
  props<{ cars: iCar[] }>()
);

export const loadCarFailure = createAction(
  '[Car] Load Car Failure',
  props<{ error: any }>()
);

export const saveCar = createAction(
  '[Car] Save Car',
  props<{ car: iCar }>()
);

export const saveCarSuccess = createAction(
  '[Car] Save Car Success',
  props<{ car: iCar }>()
);

export const saveCarFailure = createAction(
  '[Car] Save Car Failure',
  props<{ error: any }>()
);
