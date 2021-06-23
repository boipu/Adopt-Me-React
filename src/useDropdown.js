import React, { useState } from "react";

const useDropdown = (label, defaultValue, options) => {
  const [state, setState] = useState(defaultValue);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(event) => setState(event.target.value)}
        onBlur={(event) => setState(event.target.value)}
        disabled={options.length === 0}
      >
        <option>All</option>
        {options.map((optionValue) => (
          <option key={optionValue} value={optionValue}>
            {optionValue}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
