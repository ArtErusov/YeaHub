import clsx from 'clsx';
import { ArrowButton } from './components/ArrowButton';
import { DotsButton } from './components/DotsButton';
import { PageButton } from './components/PageButton';
import styles from './Pagination.module.scss';
import { getPagesRange } from '../lib/getPagesRange';
import type { PaginationProps } from '../model/types';

export function Pagination({
   totalPages,
   currentPage,
   onPageChange,
   numberOfPages = 10,
}: PaginationProps) {
   if (totalPages <= 1) return null;

   const { pages, groupIndex, totalGroups } = getPagesRange({
      currentPage,
      totalPages,
      numberOfPages,
   });

   const handlePreviousGroup = () => onPageChange((groupIndex - 2) * numberOfPages + 1);
   const handleNextGroup = () => onPageChange(groupIndex * numberOfPages + 1);
   return (
      <div className={clsx(styles['pagination'])}>
         <ArrowButton
            direction="prev"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
         />

         {groupIndex > 1 && <DotsButton onClick={handlePreviousGroup} />}

         {pages.map((page) => (
            <PageButton key={page} page={page} currentPage={currentPage} onClick={onPageChange} />
         ))}

         {groupIndex < totalGroups && <DotsButton onClick={handleNextGroup} />}

         <ArrowButton
            direction="next"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
         />
      </div>
   );
}
