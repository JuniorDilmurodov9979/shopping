import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#121214] w-full  bottom-0">
      <div className="container_custom">
        <div className="py-10 flex gap-40">
          <ul className="flex flex-col gap-3">
            <li>
              <h5 className="font-bold text-lg text-white">Category</h5>
            </li>
            <li>
              <p className="text-white hover:text-red-500">Jewelry</p>
            </li>
            <li>
              <p className="text-white hover:text-red-500">Men's clothing</p>
            </li>
            <li>
              <p className="text-white hover:text-red-500">Women's clothing</p>
            </li>
            <li>
              <p className="text-white hover:text-red-500">Electronics</p>
            </li>
          </ul>
          <ul className="flex flex-col gap-3">
            <li>
              <h5 className="font-bold text-lg text-white">Contact</h5>
            </li>
            <li className="">
              <a
                className="text-white hover:text-red-500 inline-block"
                href="https://example.com/"
                target="_blank"
              >
                example.com
              </a>
            </li>
            <li className="">
              <a
                className="text-white hover:text-red-500 inline-block"
                href="tel:+123456789"
                target="_blank"
              >
                +1 2345 67 89
              </a>
            </li>
            <li className="">
              <a
                className="text-white hover:text-red-500 inline-block"
                href="https://youtube.com"
                target="_blank"
              >
                Youtube
              </a>
            </li>
            <li className="">
              <a
                className="text-white hover:text-red-500 inline-block"
                href="https://example.com/"
                target="_blank"
              >
                @example.com
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-5 ml-auto pr-20">
            <li>
              <h5 className="font-bold text-lg text-white">
                Subscribe to our newsletter
              </h5>
            </li>
            <li className="">
              <form className="flex gap-5">
                <input
                  className=" bg-[#313131] border border-transparent rounded-4xl max-w-[180px] p-3"
                  type="email"
                  placeholder="Your email..."
                />
                <button
                  className="text-white cursor-pointer hover:text-blue-500"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
