import Header from "./components/Layout/Header";
import "./App.css";
import Products from "./components/Products/Products";
import CartContextProvider from "./store/CartProvider";
import WishlistContextProvider from "./store/WishlistProvider";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import Wishlist from "./components/Wishlist/Wishlist";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const showWishlistHandler = () => {
    setShowWishlist(true);
  };
  const closeCartAndWishlist = () => {
    setShowCart(false);
    setShowWishlist(false);
  };

  return (
    <>
      <WishlistContextProvider>
        <CartContextProvider>
          {showCart && <Cart onClose={closeCartAndWishlist} />}
          {showWishlist && <Wishlist onClose={closeCartAndWishlist} />}
          <Header
            onShowCart={showCartHandler}
            onShowWishlist={showWishlistHandler}
          />
          <main>
            <Products />
          </main>
        </CartContextProvider>
      </WishlistContextProvider>
    </>
  );
}

export default App;
