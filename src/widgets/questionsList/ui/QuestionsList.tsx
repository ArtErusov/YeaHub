import { useQuestions } from '../model/useQuestions';
import styles from './QuestionsList.module.scss';
import Question from '@/entities/question';
import Pagination from '@/features/pagination';

function QuestionsList() {
   const { questions, totalPages, isLoading, error } = useQuestions();

   if (isLoading) return <div>Загрузка...</div>;
   if (error) return <div>Ошибка при загрузке вопросов</div>;

   return (
      <div className={styles['questions-block']}>
         <h2 className={styles['questions-block__title']}>Вопросы</h2>
         <div className={styles['questions-block__separator']} />
         <div className={styles['questions-list']}>
            {questions.map((question) => (
               <Question
                  key={question.id}
                  id={question.id}
                  title={question.title}
                  complexity={question.complexity}
                  rate={question.rate}
                  shortAnswer={question.shortAnswer}
               />
            ))}
            <div className={styles['questions-list__pagination']}>
               <Pagination totalPages={totalPages} />
            </div>
         </div>
      </div>
   );
}

export default QuestionsList;
