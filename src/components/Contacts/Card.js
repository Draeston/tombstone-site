import styles from "../../assets/styles/Contacts/Card.module.css";

export function Card(props) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={require(`${props.image}`)} />
      <div className={styles.textWrapper}>
        <h1>{props.name}</h1>
        <h2>@{props.telegram}</h2>
      </div>
    </div>
  );
}
