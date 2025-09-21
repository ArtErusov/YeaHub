import { useSearchParams } from 'react-router-dom';
import styles from './Rating.module.scss';
import SelectionItem from '@/shared/ui/selectionItem';

function Rating() {
   const ratingItems: number[] = [1, 2, 3, 4, 5];
   const [searchParams, setSearchParams] = useSearchParams();

   const selectedRate = searchParams.get('rate');

   function handleSelectRating(rate: number) {
      const newParams = new URLSearchParams(searchParams);

      const currentRate = newParams.get('rate');

      if (currentRate === String(rate)) {
         newParams.delete('rate');
      } else {
         newParams.set('rate', String(rate));
      }

      newParams.set('page', '1');

      setSearchParams(newParams);
   }

   return (
      <div>
         <h3 className={styles['rating']}>Рейтинг вопроса</h3>
         <ul className={styles['rating__list']}>
            {ratingItems.map((item) => (
               <SelectionItem
                  key={item}
                  text={item}
                  onClick={() => handleSelectRating(item)}
                  isSelected={selectedRate === String(item)}
               />
            ))}
         </ul>
      </div>
   );
}

export default Rating;
