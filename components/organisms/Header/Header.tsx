import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <li>
          <Link href="/create">Создание</Link>
        </li>
        <li>
          <Link href="/update">Обновление</Link>
        </li>
        <li>
          <Link href="/delete">Удаление</Link>
        </li>
        <li>
          <Link href="/view">Просмотр</Link>
        </li>
        <li>
          <Link href="/search">Поиск</Link>
        </li>
      </ul>
    </header>
  );
}
