import styles from './QuestionsPage.module.scss';
import Filters from '@/widgets/filters';
import QuestionsList from '@/widgets/questionsList';

function QuestionsPage() {
   return (
      <div className={styles['questions-page']}>
         <QuestionsList />
         <Filters />
      </div>
   );
}

export default QuestionsPage;
