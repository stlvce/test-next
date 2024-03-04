import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import ContainerWithFilters from "@/components/templates/ContainerWithFilters/ContainerWithFilters";
import SearchForm from "@/components/molecules/FilterForm/FilterForm";
import CustomCard from "@/components/molecules/CustomCard/CustomCard";
import { ParsedUrlQuery } from "node:querystring";
import { ICar } from "@/types/types";

type Props = {
  searchParams: ParsedUrlQuery;
};

export const getServerSideProps = (async ({ query }) => {
  return { props: {} };
}) satisfies GetServerSideProps<{}>;

export default function SearchPage() {
  const cars: ICar[] = [];
  const router = useRouter();

  return (
    <ContainerWithFilters
      filterComponent={<SearchForm searchParams={router.query} />}
    >
      {cars.map((car: ICar) => (
        <CustomCard {...car} key={car.id} />
      ))}{" "}
    </ContainerWithFilters>
  );
}
