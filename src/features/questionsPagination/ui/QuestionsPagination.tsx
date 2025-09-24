import type { QuestionsPaginationProps } from '../model/types';
import { usePagination } from '../model/usePagination';
import { Pagination } from '@/shared/ui/pagination';

export function QuestionsPagination({ totalPages }: QuestionsPaginationProps) {
   const { currentPage, onPageChange } = usePagination();

   return (
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
   );
}
