import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <li
      className="border border-gray-400 rounded-lg p-5"
      key={product.id}
      data-id={product.id}
    >
      <Link to={`/product/${product.id}`}>
        <div className="bg-white border border-gray-200 rounded-lg p-2">
          <img
            className="w-full object-contain h-[200px] shadow-lg border rounded-xl border-transparent "
            src={product.image}
            alt=""
          />
        </div>
        <p className="text-center my-2">{product.title}</p>
        <p className="font-bold">${product.price}</p>
      </Link>
    </li>
  );
};

export default Item;
