interface Option {
    value: string;
    label: string;
  }
  
  interface FormSelectProps {
    options: Option[];
    selected?: string;
  }

  const options = [
    { value: "delhi", label: "New Delhi" },
    { value: "istanbul", label: "Istanbul" },
    { value: "jakarta", label: "Jakarta" },
  ];
  
  
  function formSelect({ options, selected }: FormSelectProps): JSX.Element {
    return (
      <div className="mb-3 px-3">
        <label htmlFor="select" className="form-label">
          City
        </label>
        <select className="form-select" name="" id="select" defaultValue={selected}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  

function Formacion() {
    return ( 
        <div>
            {formSelect({options, selected: "jakarta"})}
        </div>
     );
}

export default Formacion;