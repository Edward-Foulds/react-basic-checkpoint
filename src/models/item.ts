class Item {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;

  constructor(
    id: number,
    title: string,
    price: number,
    image: string,
    amount: number
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.image = image;
    this.amount = amount;
  }
}

export default Item;
