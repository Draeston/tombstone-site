import styles from "../../assets/styles/Tombstones/Card.module.css";
import { OrderButton } from "./OrderButton";
import { useState } from "react";
import { Modal } from "./Modal";

export function Card(props) {
  const [isShown, setIsShown] = useState(false);
  const [modal, setModal] = useState("");

  function showModal() {
    setIsShown(true);
  }

  function closeModal() {
    setIsShown(false);
  }

  function onKeyDown(event) {
    if (event.keyCode === 27) {
      closeModal();
    }
  }

  function onClickOutside(event) {
    if (modal && modal.contains(event.target)) {
      return;
    }
    closeModal();
  }

  return (
    <div className={styles.card}>
      <div>
        <img
          alt=""
          src={require(`../../assets/images/tombstones/${props.img}`)}
          className={styles.img}
        />
      </div>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.price}>{props.price}</p>
      <OrderButton className={styles.button} showModal={showModal}>
        Make an order
      </OrderButton>
      {isShown ? (
        <Modal
          modalRef={(n) => setModal(n)}
          closeModal={closeModal}
          onKeyDown={onKeyDown}
          onClickOutside={onClickOutside}
          title={props.title}
          img={props.img}
          price={props.price}
          id={props.id}
        />
      ) : null}
    </div>
  );
}
