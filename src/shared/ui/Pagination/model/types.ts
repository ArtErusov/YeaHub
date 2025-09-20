export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface GetPagesRangeParams {
  currentPage: number;
  totalPages: number;
  numberOfPages?: number; 
}