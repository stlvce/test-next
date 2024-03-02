"use client";

import { SubmitHandler } from "react-hook-form";
import { ICar } from "@/types/types";
import { useAppDispatch } from "@/store/hooks";
import { createCar } from "@/store/reducers";
import CarForm from "@/components/organisms/CarForm/CarForm";

export default function CreatePage() {
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ICar> = (data: ICar) => {
    dispatch(createCar(data));
  };

  return <CarForm onSubmit={onSubmit} />;
}
