import { Link } from 'react-router-dom';
import BurgerButton from '../BurgerButton/BurgerButton';
import styles from './Header.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import logo from '/images/logo.svg';

function Header() {
   return (
      <header className={styles['header']}>
         <Link to="/" className={styles['header__logo']}>
            <img src={logo} alt="Логотип сайта" />
         </Link>
         <nav className={styles['header__nav']}>
            <Link className={styles['header__link']} to="#">
               База вопросов
            </Link>
            <Link className={styles['header__link']} to="#">
               Тренажер
            </Link>
         </nav>
         <div className={styles['header__actions']}>
            <Button variant="secondary">Вход</Button>
            <Button>Регистрация</Button>
            <BurgerButton />
         </div>
      </header>
   );
}

export default Header;
