import type { DotsButtonProps } from '../../model/types';
import styles from '../Pagination.module.scss';

export function DotsButton({ onClick }: DotsButtonProps) {
   return (
      <button onClick={onClick} className={styles['pagination__btn']}>
         ...
      </button>
   );
}
