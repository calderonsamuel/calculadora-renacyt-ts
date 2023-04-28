import { useState } from "react";

interface Option {
  value: string;
  label: string;
}

export interface FormSelectProps {
  id: string;
  label?: string;
  options: Option[];
  selected?: string;
  inputClass?: string;
  onChange?: (value: string) => void;
}

export function FormSelect({
  id,
  label,
  options,
  selected,
  inputClass,
  onChange,
}: FormSelectProps): JSX.Element {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    selected
  );

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={inputClass}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select
        className="form-select"
        name=""
        id={id}
        value={selectedValue}
        onChange={handleOnChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

