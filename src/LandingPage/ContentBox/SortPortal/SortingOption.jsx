// components/SortingOptionsPortal.js
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./SortingOption.css";

const SortingOptionsPortal = ({ selectedOption, onOptionChange, onClose }) => {
  const portalRoot = document.getElementById("portal-root");

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div className="portal-overlay" onClick={onClose}>
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
    </div>,
    portalRoot
  );
};

export default SortingOptionsPortal;
