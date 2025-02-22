import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "../Item/item";

const Card = () => {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  }
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <div className="container_custom">
      <div className="wrapper my-10">
        <h2 className="text-3xl font-bold mb-10">Mens Clothing</h2>
        <ul className="grid grid-cols-4 gap-5">
          {products
            .filter((product) => product.category === "men's clothing")
            .map((product) => (
              <Item product={product} key={product.id} />
            ))}
        </ul>

        <h2 className="text-3xl font-bold my-10">Jewelery</h2>
        <ul className="grid grid-cols-4 gap-5">
          {products
            .filter((product) => product.category === "jewelery")
            .map((product) => (
              <Item product={product} key={product.id} />
            ))}
        </ul>

        <h2 className="text-3xl font-bold my-10">Women's clothing</h2>
        <ul className="grid grid-cols-4 gap-5">
          {products
            .filter((product) => product.category === "women's clothing")
            .map((product) => (
              <Item product={product} key={product.id} />
            ))}
        </ul>

        <h2 className="text-3xl font-bold my-10">Electronics</h2>
        <ul className="grid grid-cols-4 gap-5">
          {products
            .filter((product) => product.category === "electronics")
            .map((product) => (
              <Item product={product} key={product.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
