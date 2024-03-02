"use client";

import { SubmitHandler } from "react-hook-form";
import { ICar } from "@/types/types";
import { useAppDispatch } from "@/store/hooks";
import { createCar } from "@/store/reducers";
import CarForm from "@/components/organisms/CarForm/CarForm";

const initialState = {
  id: 134,
  images: ["615edbad4c35b.png", "615edbad4c35c.png", "615edbad4c35d.png"],
  name: "Volvo XC70, 2007",
  description: "1973 года выпуска, в отличном состоянии. Пробег 200000 км.",
  price: 1500000,
  contacts: "seller@mail.ru",
  technical_characteristics: {
    car_id: 45,
    brand: "Volvo",
    model: "XC70",
    productionYear: 2007,
    body: "body",
    mileage: 200000,
  },
  options: [
    {
      option_name: "Климат-контроль",
    },
    {
      option_name: "Кожаный руль",
    },
    {
      option_name: "Центральный замок",
    },
  ],
};

export default function UpdatePage() {
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ICar> = (data: ICar) => {
    console.log(data);
    dispatch(createCar(data));
  };

  return <CarForm initialState={initialState} onSubmit={onSubmit} />;
}
