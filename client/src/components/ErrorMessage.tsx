import styles from "./ErrorMessage.module.css";

export default function ({ message }: Error) {
  return (
    <div className={styles.error}>
      <p>⚠️ {message}</p>
    </div>
  );
}
