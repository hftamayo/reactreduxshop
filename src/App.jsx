import React from "react";
import Header from "./ShoppingCart/Header";
import Home from "./ShoppingCart/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./ShoppingCart/Checkout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
