import type { TitleAnswerProps } from '../../model/types';
import styles from './TitleAnswer.module.scss';

function TitleAnswer({ title, description }: TitleAnswerProps) {
   return (
      <div className={styles['question-title']}>
         <h2 className={styles['question-title__title']}>{title}</h2>
         <p className={styles['question-title__description']}>{description}</p>
      </div>
   );
}

export default TitleAnswer;
