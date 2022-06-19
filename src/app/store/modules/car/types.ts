
export interface iCarState {
  carForm: iCar,
  cars: iCar[]
}

export interface iCar {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

