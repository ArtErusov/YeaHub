import Nav from '../Nav/Nav';
import styles from './Header.module.css';
import { Button } from '@/shared/ui/Button/Button';

function Header() {
   return (
      <header className={styles.container}>
         <img alt="logo" />
         <Nav />
         <div>
            <Button variant="secondary">Вход</Button>
            <Button>Регистрация</Button>
         </div>
      </header>
   );
}

export default Header;
