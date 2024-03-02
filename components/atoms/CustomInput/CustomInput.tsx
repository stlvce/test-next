import Form from "react-bootstrap/Form";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { ICar, IFormItem } from "@/types/types";

interface PropsTypes extends IFormItem {
  register: UseFormRegister<ICar>;
}

export default function CustomInput({
  label,
  placeholder,
  inputType,
  varName,
  options = {},
  register,
  ...props
}: PropsTypes) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={inputType}
        placeholder={placeholder}
        // @ts-ignore TODO изменить тип
        {...register(varName, options)}
        {...props}
      />
    </Form.Group>
  );
}
