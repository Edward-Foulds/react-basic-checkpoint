import React from "react";
import Item from "../models/item";

export type WishlistContextObj = {
  items: Item[];
  addItem: (product: Item) => void;
  removeItem: (id: number) => void;
};

const WishlistContext = React.createContext<WishlistContextObj>({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default WishlistContext;
