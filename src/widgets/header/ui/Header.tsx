import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '/svg/logo.svg';
import { BurgerButton } from '@/shared/ui/burgerButton';
import { Button } from '@/shared/ui/button';

export const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   return (
      <header className={styles['header']}>
         <div className={styles['header__container']}>
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
            <div className={clsx(styles['header__actions'], styles['hidden-tablet'])}>
               <Button variant="link">Вход</Button>
               <Button>Регистрация</Button>
            </div>
            <BurgerButton
               isActive={isMenuOpen}
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className={clsx(styles['header__burger-button'], styles['visible-tablet'])}
            />
         </div>
      </header>
   );
};
