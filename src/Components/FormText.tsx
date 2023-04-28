import React, { useState } from 'react';

interface FormTextProps {
  id: string;
  label: string;
  value: string;
  defaultValue?: string;
  maxLength?: number;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormText: React.FC<FormTextProps> = ({ 
  id, 
  label, 
  value, 
  defaultValue = '', 
  maxLength = 100, 
  placeholder = '', 
  onChange 
}) => {
  return (
    <div className="form-floating mb-3">
      <input 
        type="text" 
        className="form-control" 
        id={id}
        placeholder={placeholder} 
        defaultValue={defaultValue}
        value={value} 
        maxLength={maxLength} 
        onChange={onChange} 
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
