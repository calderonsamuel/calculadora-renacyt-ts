import React from 'react';

export interface FormNumberProps {
  id: string;
  label: string;
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
}

export const FormNumber: React.FC<FormNumberProps> = ({ 
  id, 
  label, 
  defaultValue = 0, 
  minValue = 0, 
  maxValue = 100 
}) => (
  <div className="form-floating mb-3">
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
