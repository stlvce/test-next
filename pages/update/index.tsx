"use client";

import { SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editCarInfo } from "@/store/reducers/crudReducer";
import CarForm from "@/components/organisms/CarForm/CarForm";
import { ICar } from "@/types/types";

export default function UpdatePage() {
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<ICar> = (data: ICar) => {
    dispatch(editCarInfo({ ...data, id: Number(data.id) }));
  };

  return <CarForm onSubmit={onSubmit} withId />;
}
