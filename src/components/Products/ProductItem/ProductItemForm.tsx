import React from "react";
import { useRef, useState } from "react";

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
  };

  return (
    <form onSubmit={addToCartHandler}>
      <div>
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" name="amount" ref={inputAmount} />
      </div>
      <button>+Add to Cart</button>
      {!amountIsValid && <p>Please enter a valid amount.</p>}
    </form>
  );
};

export default ProductItemForm;
