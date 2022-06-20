import { Component, Input, Output, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/services/api.service';
import { saveCar } from 'src/app/store/modules/car/actions';
import { iCar } from 'src/app/store/modules/car/types';

@Component({
  selector: 'app-car-create-modal',
  templateUrl: './car-create-modal.component.html',
  styleUrls: ['./car-create-modal.component.css']
})
export class CarCreateModalComponent {
  @Output() modalChangeEvent =  new EventEmitter();
  confirmModalStatus = false
  loading = false;
  errorMessage = '';
  carForm: FormGroup;
  carColorList = ['Amarillo', 'Azul', 'Anaranjado', 'Blanco', 'Dorado', 'Marrón', 'Negro', 'Plateado', 'Rojo', 'Verde']
  carBrandList = ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'BAIC', 'Bentley', 'BUICK', 'Cadillac', 'Chevrolet', 'Dodge', 'Fiat', 'GMC', 'Honda', 'Infiniti', 'Jaguar', 'JAC', 'Jeep', 'KIA', 'Mazda', 'Mercedes Benz', 'Peugeot', 'RAM', 'Renault', 'SEAT', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo', 'Mitsubishi', 'Nissan']

  constructor(private store: Store, private apiService: ApiService, fb: FormBuilder) {
    this.carForm = fb.group({
      brand: ['', Validators.required],
      model: [2022, Validators.required],
      status: ['', Validators.required],
      color: ['', Validators.required],
      input_date: ['', Validators.required],
      car_identification: ['', Validators.required],
    });
  }

  onChangeModalEmit() {
    this.modalChangeEvent.emit()
  }

  openModalConfirm(){
    this.confirmModalStatus = !this.confirmModalStatus
  }

  onSubmit() {
    this.loading = true;
    const car = {
      ...this.carForm.value,
      status: this.carForm.value.status === 'Activo',
    }

    this.apiService.saveCar(car)
      .subscribe({
        next: (car: iCar) => {
          this.store.dispatch(saveCar({ car }));
          this.onChangeModalEmit();
          this.errorMessage = '' 
        },
        error: (error: string) => this.errorMessage = error,
        complete: () => {
          this.loading = false;
        }
      });
    
  }
}
