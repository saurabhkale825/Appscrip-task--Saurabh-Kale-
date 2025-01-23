import MyContext from "@/app/Context/MyContext";
import React, { useContext } from "react";
import "./SortingOption.css";

const SortingOptions = ({ selectedOption, onOptionChange, onClose }) => {
  const { isSortingVisible, setIsSortingVisible } = useContext(MyContext);
  return (
    <div
      className="portal-overlay"
      style={{ display: isSortingVisible ? "block" : "none" }}
      onClick={onClose}
    >
      <div className="portal-content" onClick={(e) => e.stopPropagation()}>
        <h3 className="portal-header">Sort By</h3>
        <div className="sorting-options">
          {[
            { id: "recommended", label: "Recommended" },
            { id: "newest", label: "Newest First" },
            { id: "popular", label: "Popular" },
            { id: "priceHighToLow", label: "Price: High to Low" },
            { id: "priceLowToHigh", label: "Price: Low to High" },
          ].map((option) => (
            <div
              key={option.id}
              className={`option ${
                selectedOption === option.id ? "selected" : ""
              }`}
              onClick={() => onOptionChange(option.id)}
            >
              {selectedOption === option.id && (
                <span className="checkmark">✔</span>
              )}
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortingOptions;
