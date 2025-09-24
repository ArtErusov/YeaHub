import clsx from 'clsx';
import { getPagesRange } from '../lib/getPagesRange';
import type { PaginationProps } from '../model/types';
import { ArrowButton } from './components/ArrowButton';
import { DotsButton } from './components/DotsButton';
import { PageButton } from './components/PageButton';
import styles from './Pagination.module.scss';
import { NUMBER_OF_PAGES } from '@/shared/config/pagination';

export function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
   if (totalPages <= 1) return null;

   const { pages, groupIndex, totalGroups } = getPagesRange({
      currentPage,
      totalPages,
   });

   const handlePreviousGroup = () => onPageChange((groupIndex - 2) * NUMBER_OF_PAGES + 1);
   const handleNextGroup = () => onPageChange(groupIndex * NUMBER_OF_PAGES + 1);
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
