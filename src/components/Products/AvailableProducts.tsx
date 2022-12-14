import Product from "../../models/product";
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./AvailableProducts.module.css";

const AvailableProducts = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [httpError, setHttpError] = useState<string>();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Products not found. Please try again.");
        }
        const data = await res.json();
        const newData = data.map((item: Product) => {
          return { ...item, amount: 0 };
        });

        setProducts(newData);
        setIsLoading(false);
      } catch (err: any) {
        setIsLoading(false);
        setHttpError(err.message);
      }
    };

    getProducts();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.error}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={classes.products}>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </section>
  );
};

export default AvailableProducts;
