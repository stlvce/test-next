import { useSelector } from "react-redux";
import { State } from "@/types/redux";
import Grid from "@/components/templates/Grid/Grid";
import CustomCard from "@/components/molecules/CustomCard/CustomCard";
import { ICar } from "@/types/types";
import { wrapper } from "@/store";

// Нет синхронизации с состоянием клиента, поэтому массив пустой
// export const getServerSideProps = wrapper.getServerSideProps((store) => () => {
//
//   const { cars } = store.getState();
//   return { props: { data: cars } };
// });

export default function ViewPage() {
  const cars = useSelector<State, ICar[]>((state) => state.cars);

  if (cars.length === 0) {
    return (
      <div style={{ textAlign: "center", opacity: 0.7 }}>
        Автомобили не добавлены
      </div>
    );
  }

  return (
    <Grid>
      {cars.map((car: ICar) => (
        <CustomCard {...car} key={car.id} />
      ))}
    </Grid>
  );
}
