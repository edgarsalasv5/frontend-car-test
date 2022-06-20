
export interface iCarState {
  carForm: iCar,
  cars: iCar[]
}

export interface iCar {
  _id: string;
  brand: string;
  model: string;
  color: string;
  status: boolean;
  input_date: Date;
  car_identification: string;
}

