"use client";

import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import { ICar } from "@/types/types";
import CustomCard from "@/components/molecules/CustomCard/CustomCard";

type Props = {
  searchParams: {
    id?: string;
  };
};

export default function DeletePage({ searchParams }: Props) {
  const { register, handleSubmit } = useForm<{ id: number }>();
  const [car, setCar] = useState<ICar | null>(null);

  const onSubmit = (data: { id: number }) => {
    fetch(`http://localhost:3000/api?id=${data.id}`)
      .then((res) => res.json())
      .then((res) => {
        setCar(res);
      })
      .catch(() => setCar(null));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="ID автомобиля..."
            {...register("id", { required: true })}
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          Удалить
        </Button>
      </Form>
      {car && <CustomCard {...car} />}
    </div>
  );
}
