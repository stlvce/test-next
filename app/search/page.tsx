import SearchForm from "@/components/molecules/FilterForm/FilterForm";
import { makeStore } from "@/store";
import { ICar } from "@/types/types";
import styles from "./styles.module.scss";
import CustomCard from "@/components/molecules/CustomCard/CustomCard";

async function getCars(searchParams: any): Promise<ICar[]> {
  const state = makeStore().getState();
  let queryParams = "?";

  for (let [key, value] of Object.entries(searchParams)) {
    queryParams += `${key}=${value}&`;
  }

  const res = await fetch(
    `${process.env.URL ?? "http://localhost:3000"}/api${queryParams}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type Props = {
  searchParams: {
    brand?: string;
    model?: string;
    productionYear?: string;
    body?: string;
    id?: string;
  };
};

export default async function SearchPage({ searchParams }: Props) {
  const cars: ICar[] = await getCars(searchParams);
  const refreshData = () => {};

  return (
    <div className={styles.searchPage}>
      <SearchForm searchParams={searchParams} />
      <div className={styles.container}>
        {cars.map((car: ICar) => (
          <CustomCard {...car} key={car.id} />
        ))}
      </div>
    </div>
  );
}
