import React, { useContext, useEffect, useState } from "react";
import "./DataContainer.css";
import MyContext from "@/app/Context/MyContext";
import axios from "axios";
// import Image from "next/image";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Image from "next/image";

function DataContainer() {
  const { data, setData } = useContext(MyContext);
  useEffect(() => {
    const fetchProducts = async (api) => {
      const response = await axios.get(api);
      setData(response.data);
      console.log(response.data);
    };

    fetchProducts("https://fakestoreapi.com/products?limit=50");
  }, [setData]); 

  return (
    <div className="data-container">
      {data.map((item) => (
        
        <div key={item.id} className="individual-product">
          <Image
            src={item.image}
            alt="product-image"
            width={100}
            height={100}
          ></Image>
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
