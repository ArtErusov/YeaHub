import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.scss';

function Search() {
   const [searchParams, setSearchParams] = useSearchParams();
   const title = searchParams.get('title') || '';

   function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
      const value = e.target.value;

      const newParams = new URLSearchParams(searchParams);

      if (value) {
         newParams.set('title', value);
         newParams.set('page', '1');
      } else {
         newParams.delete('title');
      }

      setSearchParams(newParams);
   }

   return (
      <input
         onChange={handleChangeInput}
         className={styles.input}
         value={title}
         type="search"
         placeholder="Введите запрос..."
      />
   );
}

export default Search;
