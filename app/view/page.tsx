import CustomCard from "@/components/molecules/CustomCard/CustomCard";
import styles from "./styles.module.scss";

type PostData = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

async function getData(): Promise<PostData[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ViewPage() {
  const data = await getData();

  return (
    <div className={styles.grid}>
      {data.map((item: PostData) => (
        <CustomCard title={item.title} body={item.body} key={item.id} />
      ))}
    </div>
  );
}
