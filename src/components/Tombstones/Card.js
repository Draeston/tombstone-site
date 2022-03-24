import styles from "../../assets/styles/Tombstones/Card.module.css"

export function Card (props) {
    return (
        <div className={styles.card}>
            <div>
                <img src={require(`../../assets/images/${props.img}.jpg`)} className={styles.img}/>
            </div>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.price}>{props.price}</p>
            <button className={styles.button}>Make an order</button>
        </div>
    )
}
