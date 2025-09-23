import { usePagination } from '../lib/usePagination';
import type { QuestionsPaginationProps } from '../model/types';
import { Pagination } from '@/shared/ui/pagination';

export function QuestionsPagination({ totalPages }: QuestionsPaginationProps) {
   const { currentPage, onPageChange } = usePagination();

   return (
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
   );
}
