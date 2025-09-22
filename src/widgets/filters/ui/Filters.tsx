import styles from './Filters.module.scss';
import { Rating } from '@/features/filters/rating';
import { Search } from '@/features/filters/search';
import Skills from '@/features/filters/skills';

function Filters() {
   return (
      <div className={styles['filters']}>
         <Search />
         <Skills />
         <Rating />
      </div>
   );
}

export default Filters;
