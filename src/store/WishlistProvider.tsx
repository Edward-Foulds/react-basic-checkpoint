import React, { PropsWithChildren, useReducer } from "react";
import Item from "../models/item";
import WishlistContext from "./wishlist-context";

type WishlistStateObj = {
  items: Item[];
};

type WishlistActionObj = {
  type: string;
  item: Item;
};

const defaultWishlistState: WishlistStateObj = {
  items: [],
};

const wishlistReducer = (
  state: WishlistStateObj,
  action: WishlistActionObj
): WishlistStateObj => {
  if (action.type === "ADD") {
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

    console.log("wishlist:", updatedItems);

    return {
      items: updatedItems,
    };
  }
  return defaultWishlistState;
};

const WishlistContextProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [wishlistState, dispatchWishlistAction] = useReducer(
    wishlistReducer,
    defaultWishlistState
  );

  const addItemToWishlistHandler = (item: Item) => {
    dispatchWishlistAction({ type: "ADD", item: item });
  };

  const wishlistContext = {
    items: wishlistState.items,
    addItem: addItemToWishlistHandler,
  };

  return (
    <WishlistContext.Provider value={wishlistContext}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;
