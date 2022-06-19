import {
  Actions,
  OnInitEffects,
  createEffect,
  ofType
} from '@ngrx/effects';
import { of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as CarActions from './actions';
import { ApiService } from 'src/app/services/api.service';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

@Injectable()
export class CarEffects implements OnInitEffects {
  loadCar$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CarActions.loadCar),
      switchMap(() =>
        this.apiServices.loadCar().pipe(
          map((cars) =>
            CarActions.loadCarSuccess({ cars })
          ),
          catchError(error =>
            of(CarActions.loadCarFailure({ error }))
          )
        )
      )
    )
  }
  );

  constructor(
    private actions$: Actions,
    private apiServices: ApiService
  ) { }

  ngrxOnInitEffects(): Action {
    return CarActions.loadCar();
  }
}
