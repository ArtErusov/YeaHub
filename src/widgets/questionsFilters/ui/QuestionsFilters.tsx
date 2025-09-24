import styles from './QuestionsFilters.module.scss';
import { Rating } from '@/features/questionsFilters/rating';
import { Search } from '@/features/questionsFilters/search';
import { Skills } from '@/features/questionsFilters/skills';

export const QuestionsFilters = () => {
   return (
      <div className={styles['filters']}>
         <Search />
         <Skills />
         <Rating />
      </div>
   );
};
