import { QuestionsBlock } from '@/widgets/questionsBlock';
import styles from './QuestionsPage.module.scss';
import Filters from '@/widgets/filters';

export const QuestionsPage = () => {
   return (
      <div className={styles['questions-page']}>
         <QuestionsBlock />
         <Filters />
      </div>
   );
};
