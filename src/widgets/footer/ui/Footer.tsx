import styles from './Footer.module.css';
import logoLight from '/images/logo-light.svg';

function Footer() {
   return (
      <footer className={styles.container}>
         <div className={styles.block}>
            <img src={logoLight} className={styles.logo} alt="logo" />
            <p className={styles.title}>Выбери, каким будет IT завтра, вместе с нами</p>
         </div>
         <p className={styles.description}>
            YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу. Наш
            исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для
            ознакомления в Figma.
         </p>
         <hr className={styles.separator} />
         <div className={styles.meta}>
            <p>© 2024 YeaHub</p>
            <a>Документы</a>
         </div>
      </footer>
   );
}

export default Footer;
