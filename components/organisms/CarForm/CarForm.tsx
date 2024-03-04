import MainInfoForm from "@/components/molecules/MainInfoForm/MainInfoForm";
import AdditionalInfoForm from "@/components/molecules/AdditionalInfoForm/AdditionalInfoForm";
import Button from "react-bootstrap/Button";
import { ICar, IOption } from "@/types/types";
import CustomInput from "@/components/atoms/CustomInput/CustomInput";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import OptionsForm from "@/components/molecules/OptionsForm/OptionsForm";

type Props = {
  initialState?: ICar | {};
  onSubmit: (data: ICar) => void;
  withId?: boolean;
};

export default function CarForm({
  initialState = {},
  onSubmit,
  withId = false,
}: Props) {
  const { register, handleSubmit } = useForm<ICar>({
    defaultValues: initialState,
  });
  const [isActiveTechCharact, setIsActiveTechCharact] =
    useState<boolean>(false);
  const [options, setOptions] = useState<IOption[]>([]);

  const changeVisibleTechCharact = () => {
    setIsActiveTechCharact(!isActiveTechCharact);
  };

  const handleAddOption = () => {
    setOptions([...options, { option_name: "" }]);
  };

  const handleChangeOption = (index: number, newValue: string) => {
    setOptions((prev) => {
      const updateState = prev.map((option, i) =>
        i === index ? { option_name: newValue } : option,
      );

      return updateState;
    });
    console.log(1);
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {withId && (
        <CustomInput
          register={register}
          label="ID"
          placeholder="ID автомобиля..."
          inputType="number"
          varName="id"
          options={{ required: true }}
        />
      )}
      <MainInfoForm
        register={register}
        changeVisibleTechCharact={changeVisibleTechCharact}
      />
      {isActiveTechCharact && <AdditionalInfoForm register={register} />}
      <OptionsForm
        options={options}
        handleAddOption={handleAddOption}
        handleChange={handleChangeOption}
      />
      <Button variant="primary" type="submit">
        Сохранить
      </Button>
    </Form>
  );
}
