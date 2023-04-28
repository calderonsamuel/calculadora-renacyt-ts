import React, {useState} from 'react';

export interface FormNumberProps {
  id: string;
  label: string;
  inputClass?: string;
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
  onValueChange?: (newValue: number) => void;
}

export const FormNumber: React.FC<FormNumberProps> = ({
  id,
  label,
  inputClass = "",
  defaultValue = 0,
  minValue = 0,
  maxValue = 10000,
  onValueChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
      console.log(`${id} changed to: ${newValue}`)
    }
  };

  return (
    <div className={"form-floating " + inputClass}>
      <input
        type="number"
        className="form-control"
        id={id}
        value={value.toString()}
        min={minValue}
        max={maxValue}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

