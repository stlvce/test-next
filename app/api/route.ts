import { ICar } from "@/types/types";

const db = [
  {
    id: 134,
    images: ["615edbad4c35b.png", "615edbad4c35c.png", "615edbad4c35d.png"],
    name: "Volvo XC70, 2007",
    description: "1973 года выпуска, в отличном состоянии. Пробег 200000 км.",
    price: 1500000,
    contacts: "seller@mail.ru",
    technical_characteristics: {
      car_id: 45,
      brand: "Volvo",
      model: "XC70",
      productionYear: 2007,
      body: "body",
      mileage: 200000,
    },
    options: [
      {
        option_name: "Климат-контроль",
      },
      {
        option_name: "Кожаный руль",
      },
      {
        option_name: "Центральный замок",
      },
    ],
  },
  {
    id: 134,
    images: ["615edbad4c35b.png", "615edbad4c35c.png", "615edbad4c35d.png"],
    name: "Volvo XC70, 2007",
    description: "1973 года выпуска, в отличном состоянии. Пробег 200000 км.",
    price: 1500000,
    contacts: "seller@mail.ru",
    technical_characteristics: {
      car_id: 45,
      brand: "Volvo",
      model: "SD23",
      productionYear: 2007,
      body: "body2",
      mileage: 200000,
    },
    options: [
      {
        option_name: "Климат-контроль",
      },
      {
        option_name: "Кожаный руль",
      },
      {
        option_name: "Центральный замок",
      },
    ],
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const brand = searchParams.get("brand")?.toLowerCase() ?? "";
  const model = searchParams.get("model")?.toLowerCase() ?? "";
  const productionYear = searchParams.get("productionYear") ?? "";
  const body = searchParams.get("body")?.toLowerCase() ?? "";

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
