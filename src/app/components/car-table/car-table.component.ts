import { Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Component, OnDestroy } from '@angular/core';
import { iCar } from 'src/app/store/modules/car/types';
import { ApiService } from 'src/app/services/api.service';
import { getCar } from 'src/app/store/modules/car/selector';
import * as CarActions from 'src/app/store/modules/car/actions';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnDestroy {
  private subscription: Subscription;
  showModalDeleteConfirm = false;
  showModalEditModal = false;
  loading = false;
  cars: iCar[] = [];
  carSelected: iCar | null = null;

  constructor(private store: Store, fb: FormBuilder, private apiService: ApiService) {
    this.subscription = store.select(getCar).subscribe((cars) => {
      this.cars = cars
    });
  }

  onChangeShowModalDelete() {
    this.showModalDeleteConfirm = !this.showModalDeleteConfirm;
    if (!this.showModalDeleteConfirm) this.carSelected = null;
  }

  onChangeShowModalEdit() {
    this.showModalEditModal = !this.showModalEditModal;
    if (!this.showModalEditModal) this.carSelected = null;
  }

  selectedCarDelete(car: iCar) {
    this.carSelected = car;
    this.onChangeShowModalDelete();
  }

  selectedCarEdit(car: iCar) {
    this.carSelected = car;
    this.onChangeShowModalEdit();
  }

  deleteCar() {
    this.loading = true
    if (this.carSelected) {
      this.apiService.deleteCar(this.carSelected._id).subscribe({
        next: () => {
          this.store.dispatch(CarActions.deleteCar({ id: this.carSelected ? this.carSelected._id : '' }));
          this.onChangeShowModalDelete();
          this.loading = false
        },
      });
    }
  }

  getFormDate(date: Date | string) {
    return moment(date).tz("UTC").format('YYYY/MM/DD')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}