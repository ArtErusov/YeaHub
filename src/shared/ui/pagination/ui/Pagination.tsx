import clsx from 'clsx';
import { ArrowButton } from './components/ArrowButton';
import { DotsButton } from './components/DotsButton';
import { PageButton } from './components/PageButton';
import styles from './Pagination.module.scss';

interface PaginationProps {
   totalPages: number;
   currentPage: number;
   onPageChange: (page: number) => void;
   numberOfPages?: number;
}

export function Pagination({
   totalPages,
   currentPage,
   onPageChange,
   numberOfPages = 10,
}: PaginationProps) {
   if (totalPages <= 1) return null;

   const groupIndex = Math.ceil(currentPage / numberOfPages);
   const firstPage = (groupIndex - 1) * numberOfPages + 1;
   const lastPage = Math.min(groupIndex * numberOfPages, totalPages);
   const pages = Array.from({ length: lastPage - firstPage + 1 }, (_, i) => firstPage + i);
   const totalGroups = Math.ceil(totalPages / numberOfPages);

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
