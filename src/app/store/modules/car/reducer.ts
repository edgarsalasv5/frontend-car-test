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
  on(CarActions.loadCarSuccess, (_state, { cars }) => ({ cars })),
  on(CarActions.saveCar, ({ cars }, { car }) => ({ cars: [...cars, car] })),
  on(CarActions.updateCar, ({ cars }, { car }) => ({ cars: cars.map((currentCar) =>  currentCar._id === car._id ? car : currentCar ) })),
  on(CarActions.deleteCar, ({ cars }, { id }) => {
    const carsFilter = cars.filter(({ _id }) => _id !== id);
    return { cars: carsFilter }
  }),
);
