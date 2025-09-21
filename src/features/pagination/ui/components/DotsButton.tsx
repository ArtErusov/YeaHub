import styles from '../Pagination.module.scss';

interface DotsButtonProps {
   onClick: () => void;
}

export function DotsButton({ onClick }: DotsButtonProps) {
   return (
      <button onClick={onClick} className={styles['pagination__btn']}>
         ...
      </button>
   );
}
