import { Rocket } from "phosphor-react";
import styles from "../styles/Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <strong>
        <Rocket />
        to<span>do</span>
      </strong>
    </header>
  );
}
