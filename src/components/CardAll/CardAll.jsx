import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../Item/item";
import Category from "../Category/Category";

const CardAll = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null); // Track selected category

  // Fetch all products
  async function getProducts() {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container_custom">
      <div className="wrapper grid grid-cols-4 gap-5 my-10">
        {/* Product List */}
        <ul className="grid grid-cols-4 col-span-3 gap-5">
          {products.map((product) => (
            <Item product={product} key={product.id} />
          ))}
        </ul>

        {/* Category Section */}
        <ul className="col-span-1 border rounded-lg p-5">
          <Category
            setProducts={setProducts}
            setActiveCategory={setActiveCategory}
            getAllProducts={getProducts} // Function to show all products
            activeCategory={activeCategory}
          />
        </ul>
      </div>
    </div>
  );
};

export default CardAll;
