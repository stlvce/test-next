import SearchForm from "@/components/molecules/FilterForm/FilterForm";
import { makeStore } from "@/store";
import { ICar } from "@/types/types";
import styles from "./styles.module.scss";

type PostData = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

async function getData(searchParams: any): Promise<ICar[]> {
  const state = makeStore().getState();
  let queryParams = "?";

  for (let [key, value] of Object.entries(searchParams)) {
    queryParams += `${key}=${value}&`;
  }

  const res = await fetch(`http://localhost:3000/api${queryParams}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SearchPage({ searchParams }: any) {
  const data = await getData(searchParams);
  const refreshData = () => {};

  return (
    <div className={styles.searchPage}>
      <SearchForm searchParams={searchParams} />
      <div className={styles.container}>
        {data.map((item: ICar) => (
          <div className={styles.card} key={item.id}>
            <p>ID: {item.id}</p>
            <p>Название: {item.name}</p>
            <p>Марка: {item.technical_characteristics?.brand}</p>
            <p>Модель: {item.technical_characteristics?.model}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
