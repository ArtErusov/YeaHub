import { useParams } from 'react-router-dom';
import { useGetAnswerQuery } from '../api/questionAnswerApi';
import styles from './QuestionDetails.module.scss';
import { Answer } from '@/shared/ui/answer';

function QuestionDetails() {
   const { id } = useParams();
   const { data, isLoading, isError } = useGetAnswerQuery({ id });

   if (isLoading) {
      return <div>Загрузка...</div>;
   }

   if (isError) {
      return <div>Ошибка при загрузке ответа</div>;
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
