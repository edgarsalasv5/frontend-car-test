import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/services/api.service';
import { loadCarSuccess } from 'src/app/store/modules/car/actions';
import { iCar, iCarFilter } from 'src/app/store/modules/car/types';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent {
  carForm: FormGroup;
  carColorList = ['Amarillo', 'Azul', 'Anaranjado', 'Blanco', 'Dorado', 'Marrón', 'Negro', 'Plateado', 'Rojo', 'Verde']
  carBrandList = ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'BAIC', 'Bentley', 'BUICK', 'Cadillac', 'Chevrolet', 'Dodge', 'Fiat', 'GMC', 'Honda', 'Infiniti', 'Jaguar', 'JAC', 'Jeep', 'KIA', 'Mazda', 'Mercedes Benz', 'Peugeot', 'RAM', 'Renault', 'SEAT', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo', 'Mitsubishi', 'Nissan']

  constructor(fb: FormBuilder, private apiService: ApiService, private store: Store) {
    this.carForm = fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      status: [null, Validators.required],
      color: ['', Validators.required],
      input_date: ['', Validators.required],
      car_identification: ['', Validators.required],
    });
  }

  cleanFilter() {
    this.carForm.controls['brand'].setValue('');
    this.carForm.controls['model'].setValue('');
    this.carForm.controls['color'].setValue('');
    this.carForm.controls['status'].setValue('');
    this.carForm.controls['car_identification'].setValue('');
    this.carForm.controls['input_date'].setValue('');
  }

  onSubmitFilter() {
    const status = this.carForm.value.status;
    const query: iCarFilter = {
      ...this.carForm.value,
      status: (status && status === 'Activo')
    };

    if (!status) delete query.status;

    this.apiService.filterCars(query).subscribe({
      next: (cars: iCar[]) => {
        this.store.dispatch(loadCarSuccess({ cars }))
      }
    })
  }

}
