import React from 'react';


const Select = ({ options, onChange }) => {
  return (
    <div className="select-wrapper">
      <div className="select-container">
        <select className="select-dropdown" onChange={onChange}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="select-arrow">&#9660;</div>
      </div>
    </div>
  );
};

export default Select;
