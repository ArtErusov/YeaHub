import type { GetPagesRangeParams } from "../model/types";

export function getPagesRange({
  currentPage,
  totalPages,
  numberOfPages = 10,
}: GetPagesRangeParams) {
  const groupIndex = Math.ceil(currentPage / numberOfPages);

  const firstPage = (groupIndex - 1) * numberOfPages + 1;
  const lastPage = Math.min(groupIndex * numberOfPages, totalPages);

  const pages = Array.from(
    { length: lastPage - firstPage + 1 },
    (_, index) => firstPage + index,
  );

  return {
    pages,
    groupIndex,
    firstPage,
    lastPage,
    totalGroups: Math.ceil(totalPages / numberOfPages),
  };
}