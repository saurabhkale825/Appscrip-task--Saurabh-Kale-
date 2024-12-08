import React, { useContext } from "react";
import "./ContentBox.css";
import MyContext from "@/app/Context/MyContext";
import FilterBar from "./FilterBar/FilterBar";
import FilterSidebar from "./FilterContainer/FilterContainer";
import DataContainer from "./DataContainer/DataContainer";

function ContentBox() {
  const { isFilterVisible, setIsFilterVisible, screenSize } =
    useContext(MyContext);
  return (
    <div className="content-box">
      <FilterBar />
      <div className="content-box-container">
        {isFilterVisible && screenSize > 768 ? <FilterSidebar /> : null}

        <DataContainer />
      </div>
    </div>
  );
}

export default ContentBox;
