import { useSearchParams } from 'react-router-dom';

type FilterKey = 'title' | 'rate' | 'skills';

export function useFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = {
    title: searchParams.get('title') || '',
    rate: searchParams.get('rate') || '',
    skills: searchParams.get('skills') || '',
  };

  const setFilter = (key: FilterKey, value: string | string[] | null) => {
    const newParams = new URLSearchParams(searchParams);

    if (value === null || (Array.isArray(value) && value.length === 0) || value === '') {
      newParams.delete(key);
    } else {
      if (Array.isArray(value)) {
        newParams.set(key, value.join(','));
      } else {
        newParams.set(key, value);
      }
    }

    newParams.set('page', '1'); 
    setSearchParams(newParams);
  };

  return { filters, setFilter };
}
