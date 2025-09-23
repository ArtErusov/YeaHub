import styles from './QuestionsPage.module.scss';
import Filters from '@/widgets/filters';
import { QuestionsBlock } from '@/widgets/questionsBlock';

export const QuestionsPage = () => {
   return (
      <div className={styles['questions-page']}>
         <QuestionsBlock />
         <Filters />
      </div>
   );
};
