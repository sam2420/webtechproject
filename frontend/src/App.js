import { BrowserRouter } from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import React from "react";
import {Link} from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
function App() {
  // console.log("hello")
  return (
    // 
    <BrowserRouter>
      {/* console.log("hello"), */}
      <div className="App">
        <header className="App-header">
          <Link to="/">website</Link>
        </header>
        <main>
          {/* list of products
           */}
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen/>} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          
        </main>
      </div>
    </BrowserRouter>
  );
}
// console.log("hello");

export default App;
