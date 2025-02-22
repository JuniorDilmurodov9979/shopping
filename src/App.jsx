import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Card from "./components/Card/card";
import SinglePage from "./components/SinglePage/singlePage";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <Navbar />
      <Card />

      <Footer />
    </>
  );
}

export default App;
