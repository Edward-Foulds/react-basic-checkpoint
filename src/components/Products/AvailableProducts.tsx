import Product from "../../models/product";
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./AvailableProducts.module.css";

const AvailableProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await res.json();
        const newData = data.map((item: Product) => {
          return { ...item, amount: 0 };
        });

        setProducts(newData);
      } catch (err: any) {
        console.log(err.message);
      }
    };

    getProducts();
  }, []);

  return (
    <section className={classes.products}>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </section>
  );
};

export default AvailableProducts;
