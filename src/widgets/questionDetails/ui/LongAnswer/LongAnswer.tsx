import type { LongAnswerProps } from '../../model/types';
import styles from './LongAnswer.module.scss';

function LongAnswer({ longAnswer }: LongAnswerProps) {
   return (
      <div className={styles['long-answer']}>
         <h3 className={styles['long-answer__title']}>Полный ответ</h3>
         <p
            className={styles['long-answer__description']}
            dangerouslySetInnerHTML={{ __html: longAnswer }}
         />
      </div>
   );
}

export default LongAnswer;
