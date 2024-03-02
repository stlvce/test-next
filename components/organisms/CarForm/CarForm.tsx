import MainInfoForm from "@/components/molecules/MainInfoForm/MainInfoForm";
import AdditionalInfoForm from "@/components/molecules/AdditionalInfoForm/AdditionalInfoForm";
import Button from "react-bootstrap/Button";
import { ICar, IOption } from "@/types/types";
import CustomInput from "@/components/atoms/CustomInput/CustomInput";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";

type Props = {
  initialState?: ICar | {};
  onSubmit: (data: ICar) => void;
};

export default function CarForm({ initialState = {}, onSubmit }: Props) {
  const { register, handleSubmit } = useForm<ICar>({
    defaultValues: initialState,
  });
  const [isActiveTechCharact, setIsActiveTechCharact] =
    useState<boolean>(false);
  const [options, setOptions] = useState<Record<string, IOption>>({});

  const changeVisibleTechCharact = () => {
    setIsActiveTechCharact(!isActiveTechCharact);
  };

  const handleAddOption = () => {
    setOptions({
      ...options,
      [`option${++Object.keys(options).length}`]: { option_name: "" },
    });
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <MainInfoForm
        register={register}
        changeVisibleTechCharact={changeVisibleTechCharact}
      />
      {isActiveTechCharact && <AdditionalInfoForm register={register} />}
      <div>
        <div className={styles.optionsHeader}>
          <h4>Дополнительные опции</h4>
          <Button variant="outline-primary" onClick={handleAddOption}>
            Добавить опцию
          </Button>
        </div>
        {Object.values(options).map((item: IOption, index: number) => (
          <CustomInput
            label={`Опция №${++index}`}
            placeholder="Введите название опции"
            inputType="text"
            varName="name"
            options={{ required: true }}
            register={register}
            key={index}
          />
        ))}
      </div>
      <Button variant="primary" type="submit">
        Сохранить
      </Button>
    </Form>
  );
}
