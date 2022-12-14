import React from "react";
import Item from "../models/item";

export type CartContextObj = {
  items: Item[];
  totalAmount: number;
  addItem: (product: Item) => void;
  removeItem: (id: number) => void;
};

const CartContext = React.createContext<CartContextObj>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
