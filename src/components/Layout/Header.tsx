import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header: React.FC<{
  onShowCart: () => void;
  onShowWishlist: () => void;
}> = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <h1>ReactClothing</h1>
          </li>
        </ul>
        <ul>
          <li>
            <HeaderButton
              text={"Wishlist"}
              onShowModal={props.onShowWishlist}
            />
          </li>
          <li>
            <HeaderButton text={"Cart"} onShowModal={props.onShowCart} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
