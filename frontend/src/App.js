import data from "./data";
import { BrowserRouter } from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import React from "react";
function App() {
  // console.log("hello")
  return (
    // 
    <BrowserRouter>
      {/* console.log("hello"), */}
      <div className="App">
        <header className="App-header">
          <a href="/">website</a>
        </header>
        <main>
          {/* list of products
           */}
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          <h1>Featured Products</h1>
          <div className="products">
            {data.products.map((product) => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt="product.name" />
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                  <p>
                    <strong>Rs.{product.price}</strong>
                  </p>
                  <button>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
// console.log("hello");

export default App;
