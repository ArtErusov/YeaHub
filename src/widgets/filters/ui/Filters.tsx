import styles from './Filters.module.scss';
import Search from '@/features/filters/search';
import Skills from '@/features/filters/skills';

function Filters() {
   return (
      <div className={styles['filters']}>
         <Search />
         <Skills />
      </div>
   );
}

export default Filters;
