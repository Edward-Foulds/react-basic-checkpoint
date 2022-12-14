import classes from "./Title.module.css";

const Title = (): JSX.Element => {
  return (
    <div className={classes.intro}>
      <svg viewBox="0 0 20 20" fill="currentColor">
        <use xlinkHref="./img/sprite.svg#icon-shopping-basket"></use>
      </svg>
      <h1>SUPER SHOP</h1>
    </div>
  );
};

export default Title;
