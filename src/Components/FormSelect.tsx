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
}

export function FormSelect({ id, label, options, selected, inputClass }: FormSelectProps): JSX.Element {
  return (
    <div className={inputClass}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select className="form-select" name="" id={id} defaultValue={selected}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
