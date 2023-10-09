import React from "react";
import Product from "./Product";
import Product1 from "./Images/product01.jpg";
import Product2 from "./Images/product02.jpg";
import Product3 from "./Images/product03.jpg";
import Product4 from "./Images/product04.jpg";
import Product5 from "./Images/product05.jpg";

function Home() {
  return (
    <div className="home">
      <div>
        <Product
          id="1"
          title="Cabbagge 1"
          price="$50"
          rating="10/10"
          image={Product1}
        />

        <Product
          id="2"
          title="Cabbagge 2"
          price="$50"
          rating="10/10"
          image={Product2}
        />

        <Product
          id="3"
          title="Cabbagge 3"
          price="$50"
          rating="10/10"
          image={Product3}
        />
      </div>
    </div>
  );
}

export default Home;
