import { RegisterOptions } from "react-hook-form";

export interface ITechCharacteristics {
  car_id: number;
  brand: string;
  model: string;
  productionYear: number;
  body: string;
  mileage: number;
}

export interface IOption {
  option_name: string;
}

export interface ICar {
  id: number;
  images: string[];
  name: string;
  description: string;
  price: number;
  contacts: string;
  technical_characteristics?: ITechCharacteristics;
  options?: IOption[];
}

export interface IFormItem {
  label: string;
  placeholder: string;
  inputType: string;
  varName: string;
  options: RegisterOptions;
  multiple?: boolean;
}
