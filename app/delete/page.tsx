"use client";

import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";

export default function DeletePage() {
  const { register, handleSubmit } = useForm<{ id: number }>();

  const onSubmit = (data: { id: number }) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="number"
          placeholder="ID автомобиля..."
          {...register("id", { required: true })}
        />
      </Form.Group>
      <Button variant="danger">Удалить</Button>
    </Form>
  );
}
