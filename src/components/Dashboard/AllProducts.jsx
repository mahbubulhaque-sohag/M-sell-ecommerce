import { useEffect, useState } from "react";
import Product from "../Product";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function load() {
      const productRes = await fetch("http://localhost:3000/products");
      const productData = await productRes.json();
      setProducts(productData);
    }
    load();
  }, []);
  return (
    <div className="m-5">
      <h1 className="text-5xl font-bold text-center mb-5">
        Our Latest Products
      </h1>
      <div className="flex flex-wrap gap-3 justify-center">
        {products.map((product) => (
          <Product key={product.id} product={product} products={products} setProducts={setProducts}/>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
