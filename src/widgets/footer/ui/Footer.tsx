import styles from './Footer.module.scss';
import logoLight from '/svg/logo-light.svg';

function Footer() {
   return (
      <footer className={styles['footer']}>
         <div className={styles['footer__block']}>
            <img src={logoLight} className={styles['footer__logo']} alt="logo" />
            <p className={styles['footer__title']}>Выбери, каким будет IT завтра, вместе с нами</p>
         </div>
         <p className={styles['footer__description']}>
            YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу. Наш
            исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для
            ознакомления в Figma.
         </p>
         <hr className={styles['footer__separator']} />
         <div className={styles['footer__meta']}>
            <p className={styles['footer__copyright']}>© 2024 YeaHub</p>
            <a className={styles['footer__link']}>Документы</a>
         </div>
      </footer>
   );
}

export default Footer;
