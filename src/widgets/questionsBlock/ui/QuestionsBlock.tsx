import { QuestionsPagination } from '@/features/questionsPagination';
import { useQuestions } from '../model/useQuestions';
import styles from './QuestionsBlock.module.scss';

import { QuestionsList } from './questionsList/QuestionsList';

export const QuestionsBlock = () => {
   const { questions, totalPages, isLoading, error } = useQuestions();

   if (isLoading) return <div className={styles['questions-block__skeleton']}>Загрузка...</div>;
   if (error)
      return (
         <div className={styles['questions-block__skeleton']}>Ошибка при загрузке вопросов</div>
      );

   return (
      <div className={styles['questions-block']}>
         <h2 className={styles['questions-block__title']}>Вопросы</h2>
         <div className={styles['questions-block__separator']} />
         <div className={styles['questions-block__list']}>
            <QuestionsList questions={questions} />
            <QuestionsPagination totalPages={totalPages} />
         </div>
      </div>
   );
};
