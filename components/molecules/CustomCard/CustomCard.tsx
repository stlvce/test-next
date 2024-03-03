import styles from "./styles.module.scss";
import { ICar } from "@/types/types";

export default function CustomCard({
  id,
  name,
  technical_characteristics,
}: ICar) {
  return (
    <div className={styles.card}>
      <p>ID: {id}</p>
      <p>Название: {name}</p>
      <p>Марка: {technical_characteristics?.brand}</p>
      <p>Модель: {technical_characteristics?.model}</p>
    </div>
  );
}
