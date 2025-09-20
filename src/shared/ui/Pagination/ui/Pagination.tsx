import ArrowIcon from '@shared/assets/icon/Arrow_btn.svg?react';
import clsx from 'clsx';
import { getPagesRange } from '../lib/getPagesRange';
import type { PaginationProps } from '../model/types';
import styles from './Pagination.module.scss';

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
   const NUMBER_OF_PAGES = 10;

   const { pages, groupIndex, totalGroups } = getPagesRange({
      currentPage,
      totalPages,
      numberOfPages: NUMBER_OF_PAGES,
   });

   const handlePreviousPage = () => onPageChange(currentPage - 1);
   const handleNextPage = () => onPageChange(currentPage + 1);
   const handlePage = (page: number) => onPageChange(page);

   const handlePreviousGroup = () => onPageChange((groupIndex - 2) * NUMBER_OF_PAGES + 1);
   const handleNextGroup = () => onPageChange(groupIndex * NUMBER_OF_PAGES + 1);

   return (
      <div className={styles.pagination}>
         <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            <ArrowIcon className={styles['pagination__btn-arrow']} />
         </button>

         {groupIndex > 1 && (
            <button onClick={handlePreviousGroup} className={styles['pagination__btn']}>
               ...
            </button>
         )}

         {pages.map((page) => (
            <button
               key={page}
               onClick={() => handlePage(page)}
               disabled={page === currentPage}
               className={styles['pagination__btn']}
            >
               {page}
            </button>
         ))}

         {groupIndex < totalGroups && (
            <button onClick={handleNextGroup} className={styles['pagination__btn']}>
               ...
            </button>
         )}

         <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            <ArrowIcon
               className={clsx(
                  styles['pagination__btn-arrow'],
                  styles['pagination__btn-arrow_next'],
               )}
            />
         </button>
      </div>
   );
}

export default Pagination;
