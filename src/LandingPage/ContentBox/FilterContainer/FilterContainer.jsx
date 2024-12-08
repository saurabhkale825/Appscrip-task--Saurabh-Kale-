import React, { useContext, useEffect } from "react";
import FilterGroup from "./FilterGroup";
import CheckBox from "./CheckBox";
import MyContext from "@/app/Context/MyContext";
import "./FilterContainer.css";

const FilterSidebar = () => {
  const { filter, setFilter } = useContext(MyContext);

  // Handler for updating filters
  const handleCheckboxChange = (group, key) => {
    setFilter((prev) => ({
      ...prev,
      [group]: {
        ...prev[group],
        [key]: !prev[group][key],
      },
    }));
  };

  return (
    <div className="filter-container"
    >
      <FilterGroup title="Customizable">
        <CheckBox
          label="Customizable"
          checked={filter.customizable}
          onChange={() =>
            setFilter((prev) => ({
              ...prev,
              customizable: !prev.customizable,
            }))
          }
        />
      </FilterGroup>

      {/* Ideal For Filter */}
      <FilterGroup title="Ideal For">
        <CheckBox
          label="Men"
          checked={filter.idealFor.men}
          onChange={() => handleCheckboxChange("idealFor", "men")}
        />
        <CheckBox
          label="Women"
          checked={filter.idealFor.women}
          onChange={() => handleCheckboxChange("idealFor", "women")}
        />
        <CheckBox
          label="Baby & Kids"
          checked={filter.idealFor.kids}
          onChange={() => handleCheckboxChange("idealFor", "kids")}
        />
      </FilterGroup>

      
      <FilterGroup title="Occasion">{/* Add options here */}</FilterGroup>
      <FilterGroup title="Work">{/* Add options here */}</FilterGroup>
      <FilterGroup title="Fabric">{/* Add options here */}</FilterGroup>
      <FilterGroup title="Segment">{/* Add options here */}</FilterGroup>
      <FilterGroup title="Suitable for">{/* Add options here */}</FilterGroup>
      <FilterGroup title="Raw material">{/* Add options here */}</FilterGroup>
      <FilterGroup title="Pattern">{/* Add options here */}</FilterGroup>
    </div>
  );
};

export default FilterSidebar;
