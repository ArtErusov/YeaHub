import { useSearchParams } from 'react-router-dom';
import { useGetQuestionsQuery } from '../api/questionsListApi';
import styles from './QuestionsList.module.scss';
import Question from '@/entities/question';
import Pagination from '@/shared/ui/Pagination';

function QuestionsList() {
   const [searchParams, setSearchParams] = useSearchParams();

   const page = Number(searchParams.get('page')) || 1;

   const title = searchParams.get('title') || '';
   const { data } = useGetQuestionsQuery({ page, title });

   const questions = data?.data || [];
   // Получить значения из апи
   const totalPages = 50;

   const handlePageChange = (newPage: number) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('page', String(newPage));
      setSearchParams(newParams);
   };
   const questionsBlockTestData: string = 'React';

   return (
      <div className={styles['questions-block']}>
         <h2 className={styles['questions-block__title']}>{`Вопросы ${questionsBlockTestData}`}</h2>
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
               <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
               />
            </div>
         </div>
      </div>
   );
}

export default QuestionsList;
