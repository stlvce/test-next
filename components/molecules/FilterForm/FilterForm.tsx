"use client";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function FilterForm({ searchParams }: any) {
  const router = useRouter();
  const { register, handleSubmit } = useForm({ defaultValues: searchParams });

  const refreshData = () => router.replace(router.asPath);

  return (
    <Form onSubmit={refreshData} style={{ padding: "20px" }}>
      <Form.Group className="mb-3">
        <Form.Label>Марка</Form.Label>
        <Form.Control
          type="text"
          placeholder="Марка автомобиля..."
          {...register("brand")}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Модель</Form.Label>
        <Form.Control
          type="text"
          placeholder="Модель автомобиля..."
          {...register("model")}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Год выпуска</Form.Label>
        <Form.Control
          type="text"
          placeholder="Год выпуска..."
          {...register("productionYear")}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Кузов</Form.Label>
        <Form.Control
          type="text"
          placeholder="Тип кузова..."
          {...register("body")}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Пробег</Form.Label>
        <Form.Group style={{ display: "flex", gap: 20 }}>
          <Form.Control type="number" placeholder="от..." />
          <Form.Control type="number" placeholder="до..." />
        </Form.Group>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Цена</Form.Label>
        <Form.Group style={{ display: "flex", gap: 20 }}>
          <Form.Control type="number" placeholder="от..." />
          <Form.Control type="number" placeholder="до..." />
        </Form.Group>
      </Form.Group>
      <Button variant="primary" type="submit">
        Найти
      </Button>
    </Form>
  );
}
