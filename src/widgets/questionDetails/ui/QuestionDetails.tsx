import { useParams } from 'react-router-dom';
import { useGetAnswerQuery } from '../api/questionAnswerApi';
import styles from './QuestionDetails.module.scss';

function QuestionAnswer() {
   const { id } = useParams();
   const { data } = useGetAnswerQuery({ id });

   return <div className={styles.container}>{data?.title}</div>;
}

export default QuestionAnswer;
