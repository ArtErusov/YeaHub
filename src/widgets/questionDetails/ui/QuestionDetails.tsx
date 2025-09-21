import { useParams } from 'react-router-dom';
import { useGetAnswerQuery } from '../api/questionAnswerApi';

import LongAnswer from './LongAnswer/LongAnswer';
import styles from './QuestionDetails.module.scss';
import ShortAnswer from './ShortAnswer/ShortAnswer';
import TitleAnswer from './TitleAnswer/TitleAnswer';

function QuestionDetails() {
   const { id } = useParams();
   const { data, isLoading, isError } = useGetAnswerQuery({ id });

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
      <div className={styles['details']}>
         <div className={styles['details__content']}>
            <TitleAnswer title={data.title} description={data.description} />
            <ShortAnswer shortAnswer={data.shortAnswer} />
            <LongAnswer longAnswer={data.longAnswer} />
         </div>
      </div>
   );
}

export default QuestionDetails;
