import type { AnswerProps } from '../module/types';
import styles from './Answer.module.scss';
import { sanitizeHTML } from '@/shared/lib/sanitizeHTML';

export const Answer = ({ answer, label }: AnswerProps) => {
   const title = label === 'long' ? 'Полный ответ' : 'Короткий ответ';

   return (
      <div className={styles['answer']}>
         <h3 className={styles['answer__title']}>{title}</h3>
         <p
            className={styles['answer__description']}
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(answer) }}
         />
      </div>
   );
};
