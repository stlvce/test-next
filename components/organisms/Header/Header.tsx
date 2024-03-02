import CustomLink from "@/components/atoms/CustomLink/CustomLink";
import styles from "./styles.module.scss";

const links = [
  {
    href: "/create",
    label: "Создание",
  },
  {
    href: "/update",
    label: "Изменение",
  },
  {
    href: "/delete",
    label: "Удаление",
  },
  {
    href: "/view",
    label: "Просмотр",
  },
  {
    href: "/search",
    label: "Поиск",
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        {links.map((link) => (
          <CustomLink href={link.href} label={link.label} key={link.href} />
        ))}
      </ul>
    </header>
  );
}
