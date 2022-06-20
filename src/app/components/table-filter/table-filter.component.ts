import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent {
  carForm: FormGroup;
  carColorList = ['Amarillo', 'Azul', 'Anaranjado', 'Blanco', 'Dorado', 'Marrón', 'Negro', 'Plateado', 'Rojo', 'Verde']
  carBrandList = ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'BAIC', 'Bentley', 'BUICK', 'Cadillac', 'Chevrolet', 'Dodge', 'Fiat', 'GMC', 'Honda', 'Infiniti', 'Jaguar', 'JAC', 'Jeep', 'KIA', 'Mazda', 'Mercedes Benz', 'Peugeot', 'RAM', 'Renault', 'SEAT', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo', 'Mitsubishi', 'Nissan']
  
  constructor(fb: FormBuilder) {
    this.carForm = fb.group({
      brand: ['', Validators.required],
      model: [, Validators.required],
      status: ['', Validators.required],
      color: ['', Validators.required],
      input_date: ['', Validators.required],
      car_identification: ['', Validators.required],
    });
  }

}
