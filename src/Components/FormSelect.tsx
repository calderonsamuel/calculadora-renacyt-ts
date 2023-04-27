interface Option {
    value: string;
    label: string;
  }
  
export interface FormSelectProps {
  id: string;
  label?: string;
  options: Option[];
  selected?: string;
}

export function FormSelect({ id, label, options, selected }: FormSelectProps): JSX.Element {
  return (
    <div className="mb-3 px-3">
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
