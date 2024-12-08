// components/Portal.js
import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const portalRoot = typeof document !== "undefined" && document.getElementById("portal-root");

  if (!portalRoot) return null;

  return ReactDOM.createPortal(children, portalRoot);
};

export default Portal;
