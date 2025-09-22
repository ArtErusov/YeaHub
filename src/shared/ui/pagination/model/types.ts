
export interface PaginationProps {
   totalPages: number;
   currentPage: number;
   onPageChange: (page: number) => void;
}

export interface GetPagesRangeParams {
  currentPage: number;
  totalPages: number;
}
