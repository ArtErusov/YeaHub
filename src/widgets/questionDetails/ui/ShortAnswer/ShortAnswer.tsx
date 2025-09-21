import type { ShortAnswerProps } from '../../model/types';
import styles from './ShortAnswer.module.scss';

function ShortAnswer({ shortAnswer }: ShortAnswerProps) {
   return (
      <div className={styles['short-answer']}>
         <h3 className={styles['short-answer__title']}>Краткий ответ</h3>
         <p
            className={styles['short-answer__description']}
            dangerouslySetInnerHTML={{ __html: shortAnswer }}
         />
      </div>
   );
}

export default ShortAnswer;
