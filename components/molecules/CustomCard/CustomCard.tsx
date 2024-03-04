import styles from "./styles.module.scss";
import { ICar } from "@/types/types";

export default function CustomCard({
  id,
  name,
  price,
  description,
  images,
  technical_characteristics,
}: ICar) {
  return (
    <div className={styles.card}>
      <p>ID: {id}</p>
      <p>Название: {name}</p>
      <p>Описание: {description}</p>
      <p>Цена: {price}</p>
      <p>Фотографии: {images[0]?.name}</p>
      <p>Марка: {technical_characteristics?.brand ?? "Не указано"}</p>
      <p>Модель: {technical_characteristics?.model ?? "Не указано"}</p>
    </div>
  );
}
