import Form from "react-bootstrap/Form";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import { IFormItem } from "@/types/types";

interface PropsTypes<T extends FieldValues> extends IFormItem {
  register: UseFormRegister<T>;
}

export default function CustomInput<T extends FieldValues>({
  label,
  placeholder,
  inputType,
  varName,
  options = {},
  register,
  ...props
}: PropsTypes<T>) {
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
