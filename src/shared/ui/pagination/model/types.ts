
export interface PaginationProps {
   totalPages: number;
   currentPage: number;
   onPageChange: (page: number) => void;
   numberOfPages?: number;
}

export interface GetPagesRangeParams {
  currentPage: number;
  totalPages: number;
  numberOfPages?: number;
}
