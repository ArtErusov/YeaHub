import { Pagination } from '@/shared/ui/pagination';
import { usePagination } from '../lib/usePagination';

interface QuestionsPaginationProps {
   totalPages: number;
}

export function QuestionsPagination({ totalPages }: QuestionsPaginationProps) {
   const { currentPage, onPageChange } = usePagination();

   return (
      <Pagination
         totalPages={totalPages}
         currentPage={currentPage}
         onPageChange={onPageChange}
         numberOfPages={10}
      />
   );
}
