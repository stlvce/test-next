"use client";

import { SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createCar } from "@/store/reducers/crudReducer";
import CarForm from "@/components/organisms/CarForm/CarForm";
import { ICar } from "@/types/types";

export default function CreatePage() {
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<ICar> = (data: ICar) => {
    dispatch(createCar(data));
  };

  return <CarForm onSubmit={onSubmit} />;
}
