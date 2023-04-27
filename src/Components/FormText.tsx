import React from 'react';

export interface FormTextProps {
  id: string;
  label: string;
  defaultValue?: string;
  maxLength?: number;
  placeholder?: string;
}

export const FormText: React.FC<FormTextProps> = ({ id, label, defaultValue = '', maxLength = 100, placeholder = '' }) => (
  <div className="form-floating mb-3">
    <input type="text" className="form-control" id={id}
      placeholder={placeholder} defaultValue={defaultValue}
      maxLength={maxLength} />
    <label htmlFor={id}>{label}</label>
  </div>
);
