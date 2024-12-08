import React from "react";

const CheckBox = ({ label, checked, onChange }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          style={{ marginRight: "8px" }}
        />
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
