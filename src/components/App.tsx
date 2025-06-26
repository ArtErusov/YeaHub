import styles from './App.module.scss';

export const App = () => {
  console.log(styles);
  return (
    <button className={styles['hello']}>
      <span>Hello world!111222!</span>
    </button>
  );
};
