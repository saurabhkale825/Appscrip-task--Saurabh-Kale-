import React, { useContext, useEffect, useState } from "react";
import "./DataContainer.css";
import MyContext from "@/app/Context/MyContext";
import axios from "axios";
// import Image from "next/image";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function DataContainer() {
  const { data, setData } = useContext(MyContext);

  const fetchProducts = async (api) => {
    const response = await axios.get(api);
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchProducts("https://fakestoreapi.com/products?limit=50");
  }, []);

  return (
    <div className="data-container">
      {data.map((item) => (
        // <IndividualProduct product={item} key={item.id} />
        <div key={item.id} className="individual-product">
          <img
            src={item.image}
            alt="product-image"
            width="100px"
            height="100px"
          />
          <div className="individual-product-title">{item.title}</div>
          <div className="individual-product-price">
            <div>${item.price}</div>
            <div>< FavoriteBorderOutlinedIcon/></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataContainer;
