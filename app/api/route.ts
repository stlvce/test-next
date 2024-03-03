import { ICar } from "@/types/types";
import { db } from "./mockData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const brand = searchParams.get("brand")?.toLowerCase() ?? "";
  const model = searchParams.get("model")?.toLowerCase() ?? "";
  const productionYear = searchParams.get("productionYear") ?? "";
  const body = searchParams.get("body")?.toLowerCase() ?? "";
  const id = Number(searchParams.get("id"));

  if (id) {
    return Response.json(db.find((item) => item.id === id));
  }

  const filteredData: ICar[] = db.filter(
    (item: ICar) =>
      item.technical_characteristics?.brand.toLowerCase().includes(brand) &&
      item.technical_characteristics?.model.toLowerCase().includes(model) &&
      String(item.technical_characteristics?.productionYear).includes(
        productionYear,
      ) &&
      item.technical_characteristics?.body.toLowerCase().includes(body),
  );

  return Response.json(filteredData);
}
