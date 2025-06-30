import { Link, Outlet } from 'react-router-dom';
import styles from './App.module.scss';

// Настраивал вебПак по курсу (ссылка ) что можно еще улучшить
// пройти ... Добавить сброс стилей добавить папки для FSD

export const App = () => {
  return (
    <div className={styles['container']}>
      <p>Настройка WebPack по курсу</p>{' '}
      <a href="https://www.youtube.com/watch?v=acAH2_YT6bs">Ulbi</a>
      <p>Остановился на 1.48, дальше продолжить настройки</p>
      <p>добавить папки для FSD</p>
      <Link to="/one">Страница 1</Link>
      <Link to="/two">Страница 2</Link>
      <Outlet />
    </div>
  );
};

export const One = () => {
  return <p>Это страница 1</p>;
};

export const Two = () => {
  return <p>Это страница 2</p>;
};
