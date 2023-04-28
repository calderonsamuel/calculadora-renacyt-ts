import React from 'react';

export interface FormNumberProps {
  id: string;
  label: string;
  inputClass?: string;
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
}

export const FormNumber: React.FC<FormNumberProps> = ({ 
  id, 
  label, 
  inputClass = "",
  defaultValue = 0, 
  minValue = 0, 
  maxValue = 10000 
}) => (
  <div className={"form-floating " + inputClass}>
    <input 
      type="number" 
      className="form-control"  
      id={id}
      defaultValue={defaultValue.toString()}
      min={minValue}
      max={maxValue} 
    />
    <label htmlFor={id}>{label}</label>
  </div>
);
