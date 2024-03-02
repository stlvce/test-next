import styles from "./styles.module.scss";

type Props = {
  title: string;
  body: string;
};

export default function CustomCard({ title, body }: Props) {
  return (
    <div className={styles.card}>
      <h5 className={styles.card__title}>{title}</h5>
      <p className={styles.card__body}>{body}</p>
    </div>
  );
}
