import { useSearchParams } from 'react-router-dom';

export function usePagination() {
   const [searchParams, setSearchParams] = useSearchParams();
   const currentPage = Number(searchParams.get('page')) || 1;

   const onPageChange = (newPage: number) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('page', String(newPage));
      setSearchParams(newParams);
   };

   return { currentPage, onPageChange };
}
