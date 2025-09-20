import styles from './QuestionsPage.module.scss';
import QuestionsList from '@/widgets/questionsList';

function QuestionsPage() {
   return (
      <div className={styles['questions-page']}>
         <QuestionsList />
      </div>
   );
}

export default QuestionsPage;
