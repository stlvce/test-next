import { ICar, IFormItem } from "@/types/types";
import CustomInput from "@/components/atoms/CustomInput/CustomInput";
import Form from "react-bootstrap/Form";
import { UseFormRegister } from "react-hook-form";

const mainCharacteristics: IFormItem[] = [
  {
    label: "Название",
    placeholder: "Введите название",
    inputType: "text",
    varName: "name",
    options: { required: true },
  },
  {
    label: "Описание",
    placeholder: "Введите описание",
    inputType: "text",
    varName: "description",
    options: { required: true },
  },
  {
    label: "Цена",
    placeholder: "Введите цену",
    inputType: "number",
    varName: "price",
    options: { required: true },
  },
  {
    label: "Фото",
    placeholder: "Введите фото",
    inputType: "file",
    varName: "images",
    options: { required: true },
    multiple: true,
    accept: "image/png, image/jpeg",
  },
  {
    label: "Контакты",
    placeholder: "Введите любой контакт",
    inputType: "text",
    varName: "contacts",
    options: { required: true },
  },
];

type Props = {
  register: UseFormRegister<ICar>;
  changeVisibleTechCharact: () => void;
};

export default function MainInfoForm({
  register,
  changeVisibleTechCharact,
}: Props) {
  return (
    <div>
      <h4>Основные характеристики</h4>
      {mainCharacteristics.map((item: IFormItem) => (
        <CustomInput<ICar> {...item} register={register} key={item.varName} />
      ))}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Добавить технические характеристики"
          onChange={changeVisibleTechCharact}
        />
      </Form.Group>
    </div>
  );
}
