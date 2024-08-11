


/** @format */

// DropdownMenu.js
import React from "react";

const Dropdown = () => {
  return (
    <div className="form-group language">
      <select
        className="form-control border-1 shadow-none px-4 py-1 rounded-4 custom-dropdown "
        id="background-color-select"
        style={{ backgroundColor: "#21B4B7", color: "#fff" }}
      >
        <option value="#" selected>
          English
        </option>
        <option value="#">Hindi</option>
        <option value="#">Punjabi</option>
        <option value="#">Marathi</option>
      </select>

      <span className="dropdown-icon">&#x25BC;</span>
    </div>
  );
};

export default Dropdown;
