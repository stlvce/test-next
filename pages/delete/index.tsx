"use client";

import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import { ICar } from "@/types/types";
import CustomCard from "@/components/molecules/CustomCard/CustomCard";
import { useDispatch } from "react-redux";
import { deleteCar } from "@/store/reducers/crudReducer";
import CustomInput from "@/components/atoms/CustomInput/CustomInput";

type Props = {
  searchParams: {
    id?: string;
  };
};

type State = { id: string };

export default function DeletePage({ searchParams }: Props) {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<State>();
  const [car, setCar] = useState<ICar | null>(null);

  const onSubmit = (data: { id: string }) => {
    dispatch(deleteCar(Number(data.id)));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput<State>
          register={register}
          label="ID"
          placeholder="ID автомобиля..."
          inputType="number"
          varName="id"
          options={{ required: true }}
        />
        <Button variant="danger" type="submit">
          Удалить
        </Button>
      </Form>
      {car && <CustomCard {...car} />}
    </div>
  );
}
