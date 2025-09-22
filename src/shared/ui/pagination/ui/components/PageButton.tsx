import clsx from 'clsx';
import styles from '../Pagination.module.scss';

interface PageButtonProps {
   page: number;
   currentPage: number;
   onClick: (page: number) => void;
}

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
