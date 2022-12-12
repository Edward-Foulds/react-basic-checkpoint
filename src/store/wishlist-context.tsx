import React from "react";
import Item from "../models/item";

export type WishlistContextObj = {
  items: Item[];
  addItem: (product: Item) => void;
};

const WishlistContext = React.createContext<WishlistContextObj>({
  items: [],
  addItem: (item) => {},
});

export default WishlistContext;
