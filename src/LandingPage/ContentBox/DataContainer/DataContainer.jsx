import React, { useContext, useEffect, useState } from "react";
import "./DataContainer.css";
import MyContext from "@/app/Context/MyContext";
import axios from "axios";
import Head from "next/head";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Image from "next/image";

function DataContainer() {
  const { data, setData } = useContext(MyContext);
  useEffect(() => {
    const fetchProducts = async (api) => {
      const response = await axios.get(api);
      setData(response.data);
    };

    fetchProducts("https://fakestoreapi.com/products?limit=50");
  }, [setData]);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: data.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Product",
                  name: item.title,
                  image: item.image,
                  description: item.description,
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    price: item.price,
                    availability: "https://schema.org/InStock",
                    url: `https://example.com/product/${item.id}`,
                  },
                },
              })),
            }),
          }}
        />
      </Head>

      <div className="data-container">
        {data.map((item) => (
          <div key={item.id} className="individual-product">
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
            ></Image>
            <div className="individual-product-title">{item.title}</div>
            <div className="individual-product-price">
              <div>${item.price}</div>
              <div>
                <FavoriteBorderOutlinedIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DataContainer;
