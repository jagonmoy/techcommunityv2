import React, { useState, useEffect } from "react";

import Axios from "axios";

function Facultymembers() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "http://localhost:3000/users"
    );
    const products = data;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <p key={product.userid}>{product.title}</p>
      ))}
    </div>
  );
}

export default Facultymembers;
