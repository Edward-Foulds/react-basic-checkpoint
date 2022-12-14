import React from "react";
import { useRef, useState } from "react";
import classes from "./ProductItemForm.module.css";

const ProductItemForm: React.FC<{ onAddToCart: (amount: number) => void }> = (
  props
) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputAmount = useRef<HTMLInputElement>(null);

  const addToCartHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredAmount = +inputAmount.current!.value;

    if (enteredAmount === null || enteredAmount < 1) {
      setAmountIsValid(false);
      return;
    }

    setAmountIsValid(true);
    console.log("Amount is valid");
    props.onAddToCart(enteredAmount);
    inputAmount.current!.value = "";
  };

  return (
    <form className={classes.form} onSubmit={addToCartHandler}>
      <div>
        <label htmlFor="amount">Qty: </label>
        <input
          type="number"
          id="amount"
          name="amount"
          ref={inputAmount}
          min="1"
        />
      </div>
      <button className={classes.button}>+Add to Cart</button>
      {!amountIsValid && (
        <p style={{ color: "red" }}>Please enter a valid amount.</p>
      )}
    </form>
  );
};

export default ProductItemForm;
