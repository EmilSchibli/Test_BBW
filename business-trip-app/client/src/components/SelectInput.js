import React from 'react';

// Wiederverwendbare Komponente für Dropdowns
const SelectInput = ({ value, onChange, options, placeholder }) => (
  <select
    value={value}
    onChange={onChange}
    style={{ marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
  >
    <option value="">{placeholder}</option>
    {options.map((option, index) => (
      <option key={index} value={option}>{option}</option>
    ))}
  </select>
);

export default SelectInput;
