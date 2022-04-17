import styles from "../../assets/styles/Landing/Hero.module.css";

export function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>TOMBSTONES</h1>
      <p className={styles.heroText}>
        This web-site was designed to serve the purpose for fast decision
        process on gravestone selection
      </p>
    </div>
  );
}
