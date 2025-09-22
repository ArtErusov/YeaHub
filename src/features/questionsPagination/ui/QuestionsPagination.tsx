import { Pagination } from '@/shared/ui/pagination';
import { usePagination } from '../lib/usePagination';
import type { QuestionsPaginationProps } from '../model/types';

export function QuestionsPagination({ totalPages }: QuestionsPaginationProps) {
   const { currentPage, onPageChange } = usePagination();

   return (
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
   );
}
