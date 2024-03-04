import { ICar, IFormItem } from "@/types/types";
import CustomInput from "@/components/atoms/CustomInput/CustomInput";
import { UseFormRegister } from "react-hook-form";

const additCharacteristics: IFormItem[] = [
  {
    label: "Марка",
    placeholder: "Введите марку автомобиля",
    inputType: "text",
    varName: "technical_characteristics.brand",
    options: { required: true },
  },
  {
    label: "Модель",
    placeholder: "Введите модель автомобиля",
    inputType: "text",
    varName: "technical_characteristics.model",
    options: { required: true },
  },
  {
    label: "Год выпуска",
    placeholder: "Введите год выпуска",
    inputType: "number",
    varName: "technical_characteristics.productionYear",
    options: { required: true },
  },
  {
    label: "Кузов",
    placeholder: "Введите кузов",
    inputType: "text",
    varName: "technical_characteristics.body",
    options: { required: true },
  },
  {
    label: "Пробег",
    placeholder: "Введите количество пробега",
    inputType: "number",
    varName: "technical_characteristics.mileage",
    options: { required: true },
  },
];

type Props = {
  register: UseFormRegister<ICar>;
};

export default function AdditionalInfoForm({ register }: Props) {
  return (
    <div>
      <h4>Дополнительные характеристики</h4>
      {additCharacteristics.map((item: IFormItem) => (
        <CustomInput<ICar> {...item} register={register} key={item.varName} />
      ))}
    </div>
  );
}
