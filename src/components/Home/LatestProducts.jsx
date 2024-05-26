import { useEffect, useState } from "react";
import Product from "../Product";

const LatestProducts = () => {
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
        {products.slice(0, 3).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
