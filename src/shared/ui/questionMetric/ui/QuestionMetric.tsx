import type { InfoItemProps } from '../model/types';
import styles from './QuestionMetric.module.scss';

export const QuestionMetric = ({ variant, value }: InfoItemProps) => {
   const textSelection = variant === 'rating' ? 'Рейтинг' : 'Сложность';

   return (
      <div className={styles['question-metric']}>
         <p className={styles['question-metric__variant']}>{`${textSelection}:`}</p>
         <div className={styles['question-metric__value']}>{value}</div>
      </div>
   );
};
