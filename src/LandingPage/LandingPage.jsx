"use client";
import { useState, useContext, useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import SubHeader from "./SubHeader/SubHeader";
import MyContext from "@/app/Context/MyContext";
import ContentBox from "./ContentBox/ContentBox";

function LandingPage() {
  //states
  const [filter, setFilter] = useState({
    customizable: false,
    idealFor: {
      men: false,
      women: false,
      kids: false,
    },
    occasion: {},
    work: {},
    fabric: {},
    segment: {},
    suitablefor: {},
    rawmaterial: {},
    pattern: {},
  });

  const [sort, setSort] = useState("Recommended");
  const [isSortingVisible, setIsSortingVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [data, setData] = useState([]);

  const [screenSize, setScreenSize] = useState(0); // Initialize with a default value

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setScreenSize(window.innerWidth);
      setScreenSize(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div>
      <MyContext.Provider
        value={{
          filter,
          setFilter,
          sort,
          setSort,
          isFilterVisible,
          setIsFilterVisible,
          data,
          setData,
          screenSize,
          isSortingVisible,
          setIsSortingVisible,
        }}
      >
        <Header />
        <SubHeader />
        <ContentBox />
        <Footer />
      </MyContext.Provider>
    </div>
  );
}

export default LandingPage;
