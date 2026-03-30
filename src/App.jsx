import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import MainProducts from "./Components/MainProducts/MainProducts";
import Navbar from "./Components/Navbar/Navbar";
import Stats from "./Components/Stats/Stats";
import Steps from "./Components/Steps/Steps";
import Pricing from "./Components/Pricing/Pricing";

// Fetching Products
const fetchProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

function App() {
  const productPromise = fetchProducts();
  const [cartItems, setCartItems] = useState([]);
  console.log(productPromise);
  return (
    <>
      {/* Navbar */}
      <Navbar cartItems={cartItems}></Navbar>
      {/* Banner */}
      <Banner></Banner>
      {/* Stats */}
      <Stats></Stats>
      {/* MainProducts */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center my-10">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <MainProducts
          setCartItems={setCartItems}
          cartItems={cartItems}
          productPromise={productPromise}
        ></MainProducts>
      </Suspense>
      {/* Steps */}
      <Steps></Steps>
      {/* Pricing */}
      <Pricing></Pricing>
    </>
  );
}

export default App;
