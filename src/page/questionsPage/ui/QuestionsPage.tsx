import styles from './QuestionsPage.module.scss';

import { QuestionsBlock } from '@/widgets/questionsBlock';
import { QuestionsFilters } from '@/widgets/questionsFilters';

export const QuestionsPage = () => {
   return (
      <div className={styles['questions-page']}>
         <QuestionsBlock />
         <QuestionsFilters />
      </div>
   );
};
