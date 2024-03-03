import CustomCard from "@/components/molecules/CustomCard/CustomCard";
import { ICar } from "@/types/types";
import styles from "./styles.module.scss";

async function getCars(): Promise<ICar[]> {
  const res = await fetch(`http://localhost:3000/api`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ViewPage() {
  const cars: ICar[] = await getCars();

  return (
    <div className={styles.grid}>
      {cars.map((car: ICar) => (
        <CustomCard {...car} key={car.id} />
      ))}
    </div>
  );
}
