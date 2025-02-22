import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/item";
import { StarFilled } from "@ant-design/icons";
import RatingStars from "../Rating/rating";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

const SinglePage = () => {
  const [product, setProduct] = useState(null);

  const params = useParams();
  const id = params.id;
  console.log(id);

  async function getSingleProduct(id) {
    let res = await axios.get("https://fakestoreapi.com/products/" + id);
    console.log(res.data);
    setProduct(res.data);
  }

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container_custom">
        <div className="flex justify-center  my-10">
          <ul>
            {product ? (
              <li className="" key={product.id} data-id={product.id}>
                <div className="flex gap-10 items-center">
                  <div className="bg-white border w-[500px]  p-5 shadow-xl border-transparent rounded-xl">
                    <img
                      className="w-full object-contain max-h-[400px] "
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-5 max-w-[700px]">
                    <h3 className="font-bold text-2xl">{product.title}</h3>
                    <p className="text-gray-500 text-lg">
                      Description: {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-lg">${product.price}</p>
                      <button className="cursor-pointer text-white bg-black py-3 px-6 rounded-lg">
                        Add to cart
                      </button>
                    </div>
                    <div className="border-t border-gray-400 flex flex-col gap-3 pt-3">
                      <p className="text-lg font-medium">
                        Category: {product.category}
                      </p>
                      <div className="">
                        <RatingStars rating={product.rating?.rate} />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <h1 className="text-3xl text-center my-10 text-gray-700">
                Loading...
              </h1>
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SinglePage;
