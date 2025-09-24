import { useParams } from 'react-router-dom';
import { useGetQuestionQuery } from '../api/getQuestionApi';
import styles from './QuestionDetails.module.scss';
import { Answer } from '@/shared/ui/answer';
import { Skeleton } from '@/shared/ui/skeleton';

function QuestionDetails() {
   const { id } = useParams();
   const { data, isLoading, isError } = useGetQuestionQuery({ id });

   if (isLoading) {
      return <Skeleton>Загрузка...</Skeleton>;
   }

   if (isError) {
      return <Skeleton>Ошибка при загрузке ответа</Skeleton>;
   }
   if (!data) {
      return <Skeleton>Нет данных</Skeleton>;
   }

   return (
      <div className={styles['question-details']}>
         <div className={styles['question-details__header']}>
            <h2 className={styles['question-details__title']}>{data.title}</h2>
            <p className={styles['question-details__description']}>{data.description}</p>
         </div>
         <Answer answer={data.shortAnswer} label="short" />
         <Answer answer={data.longAnswer} label="long" />
      </div>
   );
}

export default QuestionDetails;
