import styles from './Search.module.scss';
import { useFilters } from '@/shared/lib/hooks/useFilters';

export const Search = () => {
   const { filters, setFilter } = useFilters();

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter('title', e.target.value);
   };

   return (
      <input
         type="search"
         value={filters.title}
         onChange={handleChange}
         placeholder="Введите запрос..."
         className={styles['input']}
      />
   );
};
