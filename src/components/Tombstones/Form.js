import "../../assets/styles/Tombstones/Form.css";
import { useState } from "react";
import InputMask from "react-input-mask";

export function Form(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(event) {
    const target = event.target;
    const named = target.name;
    const value = target.value;

    switch (named) {
      case "Name":
        setName(value);
        break;
      case "Phone":
        setPhone(value);
        break;
      default:
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    if (phone.indexOf("_") !== -1 || phone === "") {
      return;
    }
    if (name === "") {
      return;
    }
    fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({
        id: props.id,
        name,
        phone,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("We will call you later");
      } else {
        alert("Error");
      }
    });
    props.closeModal();
  }

  return (
    <form onSubmit={onSubmit} className="order-form">
      <h1 className="form-title">Make an order</h1>
      <h2 className="form-item-name">Name: {props.title}</h2>
      <h2 className="form-item-name">Price: {props.price}</h2>
      <img
        className="form-img"
        src={require(`../../assets/images/tombstones/${props.img}`)}
        alt=""
      />
      <input
        className="form-name"
        placeholder="Your name"
        type="text"
        value={name}
        name="Name"
        onChange={(e) => handleSubmit(e)}
      />
      <InputMask
        className="form-phone"
        placeholder="Your phone"
        type="text"
        value={phone}
        name="Phone"
        onChange={(e) => handleSubmit(e)}
        maskChar="_"
        mask="+7 (999) 999-99-99"
      />
      <input className="form-submit" type="submit" value="Order" />
    </form>
  );
}
