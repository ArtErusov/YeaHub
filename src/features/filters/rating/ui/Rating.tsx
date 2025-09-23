import styles from './Rating.module.scss';
import { useFilters } from '@/shared/lib/hooks/useFilters';
import SelectionItem from '@/shared/ui/selectionItem';

export const Rating = () => {
   const ratingItems = [1, 2, 3, 4, 5];
   const { filters, setFilter } = useFilters();

   return (
      <>
         <h3 className={styles['rating']}>Рейтинг вопроса</h3>
         <ul className={styles['rating__list']}>
            {ratingItems.map((item) => (
               <SelectionItem
                  key={item}
                  text={item}
                  isSelected={filters.rate === String(item)}
                  onClick={() =>
                     setFilter('rate', filters.rate === String(item) ? null : String(item))
                  }
               />
            ))}
         </ul>
      </>
   );
};
