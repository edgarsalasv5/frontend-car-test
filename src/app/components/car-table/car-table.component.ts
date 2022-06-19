import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { iCar } from 'src/app/store/modules/car/types';
import { getCar } from 'src/app/store/modules/car/selector';
import * as CarActions from 'src/app/store/modules/car/actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnDestroy {
  private subscription: Subscription;
  cars: iCar[] = [];

  constructor(private store: Store, fb: FormBuilder) {
    this.subscription = store.select(getCar).subscribe((p) => {
      this.cars = p;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}