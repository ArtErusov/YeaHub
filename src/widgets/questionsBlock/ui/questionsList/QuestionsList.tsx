import type { QuestionsListProps } from '../../model/types';
import styles from './QuestionsList.module.scss';
import { Question } from '@/entities/question';

export const QuestionsList = ({ questions }: QuestionsListProps) => {
   return (
      <ul className={styles['questions-list']}>
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
      </ul>
   );
};
