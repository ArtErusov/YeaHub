import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.container}>
      <Link className={styles.link} to="#">
        База вопросов
      </Link>
      <Link className={styles.link} to="#">
        Тренажер
      </Link>
    </nav>
  );
}

export default Nav;
