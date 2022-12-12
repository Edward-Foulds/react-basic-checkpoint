import React, { PropsWithChildren, useReducer } from "react";
import Item from "../models/item";
import CartContext from "./cart-context";

type CartStateObj = {
  items: Item[];
  totalAmount: number;
};

type CartActionObj = {
  type: string;
  item: Item;
};

const defaultCartState: CartStateObj = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (
  state: CartStateObj,
  action: CartActionObj
): CartStateObj => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    console.log("Cart Items: ", updatedItems);
    console.log("Cart Total: ", updatedTotalAmount);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartContextProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: Item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
