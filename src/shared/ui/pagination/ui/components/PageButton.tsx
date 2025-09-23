import clsx from 'clsx';
import type { PageButtonProps } from '../../model/types';
import styles from '../Pagination.module.scss';

export function PageButton({ page, currentPage, onClick }: PageButtonProps) {
   return (
      <button
         onClick={() => onClick(page)}
         disabled={page === currentPage}
         className={clsx(styles['pagination__btn'], {
            [styles['pagination__btn_active']]: page === currentPage,
         })}
      >
         {page}
      </button>
   );
}
