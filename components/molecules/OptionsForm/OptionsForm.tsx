import { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IOption } from "@/types/types";
import styles from "@/components/organisms/CarForm/styles.module.scss";

type Props = {
  options: IOption[];
  handleAddOption: () => void;
  handleChange: (index: number, newValue: string) => void;
};

export default function OptionsForm({
  options,
  handleAddOption,
  handleChange,
}: Props) {
  const activeInput = useRef<HTMLInputElement | null>(null);
  useEffect(() => {}, [options]);
  return (
    <div>
      <div className={styles.optionsHeader}>
        <h4>Дополнительные опции</h4>
        <Button variant="outline-primary" onClick={handleAddOption}>
          Добавить опцию
        </Button>
      </div>
      {options.map((option: IOption, index: number) => (
        <Form.Group className="mb-3" key={option.option_name + String(index)}>
          <Form.Label>Опиция №{index + 1}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Название опции..."
            onChange={(event) => {
              handleChange(index, event.target.value);
              activeInput.current?.focus();
            }}
            onFocus={(event: any) => {
              activeInput.current = event.target;
            }}
            value={option.option_name}
            ref={activeInput}
          />
        </Form.Group>
      ))}
    </div>
  );
}
