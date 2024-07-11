import React from 'react';

// Wiederverwendbare Komponente für Textfelder
const TextInput = ({ type, value, onChange, placeholder }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    style={{ marginBottom: '10px', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
  />
);

export default TextInput;
