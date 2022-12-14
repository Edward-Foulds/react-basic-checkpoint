import React, { PropsWithChildren, useReducer } from "react";
import Item from "../models/item";
import WishlistContext from "./wishlist-context";

type WishlistStateObj = {
  items: Item[];
};

type WishlistActionObj = {
  id?: number;
  type: string;
  item?: Item;
};

const defaultWishlistState: WishlistStateObj = {
  items: [],
};

const wishlistReducer = (
  state: WishlistStateObj,
  action: WishlistActionObj
): WishlistStateObj => {
  if (action.type === "ADD") {
    const existingWishlistItem = state.items.find(
      (item) => item.id === action.item!.id
    );

    return {
      items: existingWishlistItem
        ? state.items
        : state.items.concat(action.item!),
    };
  }

  if (action.type === "REMOVE") {
    const updatedItems = state.items.filter((item) => item.id !== action.id);

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

  const removeItemFromWishlistHandler = (id: number) => {
    dispatchWishlistAction({ type: "REMOVE", id: id });
  };

  const wishlistContext = {
    items: wishlistState.items,
    addItem: addItemToWishlistHandler,
    removeItem: removeItemFromWishlistHandler,
  };

  return (
    <WishlistContext.Provider value={wishlistContext}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;
