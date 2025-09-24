export interface PaginationProps {
   totalPages: number;
   currentPage: number;
   onPageChange: (page: number) => void;
}

export interface GetPagesRangeParams {
   currentPage: number;
   totalPages: number;
}

export interface ArrowButtonProps {
   direction?: 'prev' | 'next';
   onClick: () => void;
   disabled?: boolean;
}

export interface DotsButtonProps {
   onClick: () => void;
}

export interface PageButtonProps {
   page: number;
   currentPage: number;
   onClick: (page: number) => void;
}
