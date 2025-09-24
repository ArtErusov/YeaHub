import { useParams } from 'react-router-dom';
import { useGetQuestionQuery } from '../api/getQuestionApi';
import styles from './QuestionDetails.module.scss';
import { Answer } from '@/shared/ui/answer';

function QuestionDetails() {
   const { id } = useParams();
   const { data, isLoading, isError } = useGetQuestionQuery({ id });

   if (isLoading) {
      return <div>Загрузка...</div>;
   }

   if (isError) {
      return <div>Ошибка при загрузке ответа</div>;
   }
   if (!data) {
      return <div>Нет данных</div>;
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
