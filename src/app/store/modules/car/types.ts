
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

export interface iCarFilter {
  brand?: string;
  model?: number;
  status?: boolean;
  color?: string;
  input_date?: string;
  car_identification?: string;
}