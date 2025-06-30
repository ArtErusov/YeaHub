import { Link, Outlet } from 'react-router-dom';
import styles from './App.module.scss';

export const App = () => {
  return (
    <button className={styles['hello']}>
      <span>Hello world!</span>
      <Link to="/one">Страница 1</Link>
      <Link to="/two">Страница 2</Link>
      <Outlet />
    </button>
  );
};

export const One = () => {
  return <p>Это страница 1</p>;
};

export const Two = () => {
  return <p>Это страница 2</p>;
};
