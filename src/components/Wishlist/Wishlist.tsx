import Modal from "../UI/Modal";

const Wishlist = (props: { onClose: () => void }) => {
  return (
    <Modal onClose={props.onClose}>
      <h3>Wishlist Shown Here</h3>
    </Modal>
  );
};

export default Wishlist;
