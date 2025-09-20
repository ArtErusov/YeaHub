import styles from './Filters.module.scss';
import Search from '@/features/filters/search';

function Filters() {
   return (
      <div className={styles['filters']}>
         <Search />
      </div>
   );
}

export default Filters;
