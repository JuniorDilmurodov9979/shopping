import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = ({
  setProducts,
  setActiveCategory,
  getAllProducts,
  activeCategory,
}) => {
  const [categories, setCategories] = useState([]);

  // Fetch all categories
  async function fetchCategories() {
    try {
      let res = await axios.get("https://fakestoreapi.com/products/categories");
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  // Fetch products by category
  async function fetchProducts(category) {
    try {
      let res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setProducts(res.data);
      setActiveCategory(category); // Set the selected category
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  // Show all products and reset activeCategory
  const handleShowAll = () => {
    getAllProducts(); // Fetch all products
    setActiveCategory(null); // Reset category selection
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      {/* Show All Button */}
      <button
        onClick={handleShowAll}
        className={`w-full p-2 border rounded mb-3 ${
          activeCategory === null ? "bg-blue-500 text-white" : "bg-gray-100"
        }`}
      >
        Show All
      </button>

      {/* Category List */}
      <ul className="flex flex-col gap-2">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => fetchProducts(item)}
            className={`w-full p-2 border rounded cursor-pointer ${
              activeCategory === item ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Category;
