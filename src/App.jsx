import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Stats from "./Components/Stats/Stats";

// Fetching Products
const fetchProducts = async () => {
  const res = await fetch('/products.json');
  return res.json();
};

function App() {
  const productPromise = fetchProducts();
  console.log(productPromise);
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Banner */}
      <Banner></Banner>
      {/* Stats */}
      <Stats></Stats>
      {/* AllProducts */}
      
    </>
  );
}

export default App;
