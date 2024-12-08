import { useContext } from "react";
import "./FilterBar.css";
import MyContext from "@/app/Context/MyContext";
import SortingOptionsPortal from "../SortPortal/SortingOption";

function FilterBar() {
  const {
    isFilterVisible,
    setIsFilterVisible,
    isSortingVisible,
    setIsSortingVisible,
    screenSize,sort,
    setSort
  } = useContext(MyContext);

  const handleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  const handleOptionChange = (optionId) => {
    console.log("Selected Option:", isSortingVisible);
    setSort(optionId);
    setIsSortingVisible(!isSortingVisible); 
  };

  return (
    <div className="filter-bar">
      <div className="item-count">
        <strong>3425 ITEMS</strong>

        {screenSize > 768 ? (
          <div className="hide-filter">
            <span className="back-arrow">{isFilterVisible ? "<" : ">"}</span>
            <span
              className="filter-text"
              onClick={() => handleFilterVisibility()}
            >
              {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
            </span>
          </div>
        ) : (
          <div className="mobile-filter">Filter</div>
        )}
      </div>

      <div className="sort-options" onClick={() => setIsSortingVisible(!isSortingVisible)}>
        <strong>{sort}</strong> <span className="dropdown-arrow">▼</span>
      </div>
      {/* Sorting Options Portal */}
      {isSortingVisible && (
        <SortingOptionsPortal
          selectedOption={sort} // Pass the selected option
          onOptionChange={handleOptionChange} // Handle option change
          onClose={() => setIsSortingVisible(false)} // Close the portal
        />
      )}
    </div>
  );
}

export default FilterBar;
