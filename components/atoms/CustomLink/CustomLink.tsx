"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";

type Props = {
  href: string;
  label: string;
};

export default function CustomLink({ href, label }: Props) {
  const pathname = usePathname();

  return (
    <li>
      <Link className={pathname === href ? styles.active : ""} href={href}>
        {label}
      </Link>
    </li>
  );
}
