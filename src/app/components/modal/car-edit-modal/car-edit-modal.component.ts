import { Store } from '@ngrx/store';
import { iCar } from 'src/app/store/modules/car/types';
import { ApiService } from 'src/app/services/api.service';
import { saveCar, updateCar } from 'src/app/store/modules/car/actions';
import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-car-edit-modal',
  templateUrl: './car-edit-modal.component.html',
  styleUrls: ['./car-edit-modal.component.css']
})
export class CarEditModalComponent implements OnChanges {
  @Output() modalChangeEvent = new EventEmitter();
  @Input() carEdit: iCar | null = null;
  errorMessage = '';
  carForm: FormGroup;
  carColorList = ['Amarillo', 'Azul', 'Anaranjado', 'Blanco', 'Dorado', 'Marrón', 'Negro', 'Plateado', 'Rojo', 'Verde']
  carBrandList = ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'BAIC', 'Bentley', 'BUICK', 'Cadillac', 'Chevrolet', 'Dodge', 'Fiat', 'GMC', 'Honda', 'Infiniti', 'Jaguar', 'JAC', 'Jeep', 'KIA', 'Mazda', 'Mercedes Benz', 'Peugeot', 'RAM', 'Renault', 'SEAT', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo', 'Mitsubishi', 'Nissan']

  constructor(private store: Store, private apiService: ApiService, fb: FormBuilder) {
    this.carForm = fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      status: ['', Validators.required],
      color: ['', Validators.required],
      input_date: ['', Validators.required],
      car_identification: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('carEdit')) {
      const car: iCar = changes['carEdit'].currentValue;
      if (car) {
        this.carForm.controls['brand'].setValue(String(car.brand));
        this.carForm.controls['model'].setValue(car.model);
        this.carForm.controls['color'].setValue(car.color);
        this.carForm.controls['status'].setValue(car.status ? 'Activo' : 'Inactivo');
        this.carForm.controls['car_identification'].setValue(car.car_identification);
        this.carForm.controls['input_date'].setValue(moment(car.input_date).format('YYYY-MM-DD'));
      }
    }
  }

  onChangeModalEmit() {
    this.modalChangeEvent.emit()
  }

  onSubmit() {
    if (this.carEdit && this.carEdit._id) {
      const car = {
        ...this.carForm.value,
        status: this.carForm.value.status === 'Activo',
      }

      this.apiService.updateCar(car, this.carEdit._id)
        .subscribe({
          next: (car: iCar) => {
            this.store.dispatch(updateCar({ car }));
            this.onChangeModalEmit();
          },
          error: (error: string) => this.errorMessage = error,
          complete: () => this.errorMessage = ''
        });
    }

  }
}
