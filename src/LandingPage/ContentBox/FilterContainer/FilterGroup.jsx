import MyContext from "@/app/Context/MyContext";
import React, { useContext } from "react";

const FilterGroup = ({ title, children }) => {
  const { isFilterVisible, setIsFilterVisible } = useContext(MyContext);
  return (
    <div style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
      {/* Filter Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          padding: "10px 0",
        }}
        onClick={() => setIsFilterVisible(!isFilterVisible)}
      >
        <h3 style={{ margin: 0, fontSize: "16px" }}>{title}</h3>
        <span>{isFilterVisible ? "▲" : "▼"}</span>
      </div>

      {/* Filter Content */}
      {isFilterVisible && <div style={{ padding: "10px 0" }}>{children}</div>}
    </div>
  );
};

export default FilterGroup;
