import { useState, useEffect, type ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.scss';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

function Search() {
   const [searchParams, setSearchParams] = useSearchParams();
   const title: string = searchParams.get('title') || '';
   const [inputValue, setInputValue] = useState<string>(title);

   const debouncedValue: string = useDebounce(inputValue, 1000);

   useEffect(() => {
      const newParams = new URLSearchParams(searchParams);

      if (debouncedValue) {
         newParams.set('title', debouncedValue);
         newParams.set('page', '1');
      } else {
         newParams.delete('title');
      }

      setSearchParams(newParams);
   }, [debouncedValue, searchParams, setSearchParams]);

   function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
      setInputValue(e.target.value);
   }

   return (
      <input
         onChange={handleChangeInput}
         className={styles.input}
         value={inputValue}
         type="search"
         placeholder="Введите запрос..."
      />
   );
}

export default Search;
