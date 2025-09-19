import styles from './QuestionsPage.module.scss';
import QuestionsBlock from '@/widgets/questionsBlock';

function QuestionsPage() {
   return (
      <div className={styles['questions-page']}>
         <QuestionsBlock />
      </div>
   );
}

export default QuestionsPage;
