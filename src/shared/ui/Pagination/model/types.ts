export interface PaginationProps {
  totalPages: number;
}

export interface GetPagesRangeParams {
  currentPage: number;
  totalPages: number;
  numberOfPages?: number; 
}