import type { GetPagesRangeParams } from '../model/types';
import { NUMBER_OF_PAGES } from '@/shared/config/pagination';

export function getPagesRange({ currentPage, totalPages }: GetPagesRangeParams) {
   const groupIndex = Math.ceil(currentPage / NUMBER_OF_PAGES);
   const firstPage = (groupIndex - 1) * NUMBER_OF_PAGES + 1;
   const lastPage = Math.min(groupIndex * NUMBER_OF_PAGES, totalPages);
   const pages = Array.from({ length: lastPage - firstPage + 1 }, (_, i) => firstPage + i);
   const totalGroups = Math.ceil(totalPages / NUMBER_OF_PAGES);

   return { pages, groupIndex, totalGroups };
}
