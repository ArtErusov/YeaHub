import { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Question.module.scss';
import type { QuestionType } from '@/shared/types/QuestionType';

import { sanitizeHTML } from '@/shared/lib/sanitizeHTML';
import arrow from '/svg/arrowOpen.svg';
import { QuestionMetric } from '@/shared/ui/questionMetric';

export const Question = ({ id, rate, title, complexity, shortAnswer }: QuestionType) => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const safeHTML = sanitizeHTML(shortAnswer);

   return (
      <li className={styles['question']}>
         <div onClick={() => setIsOpen(!isOpen)} className={styles['question__header']}>
            <div className={styles['question__dot']} />
            <p className={styles['question__title']}>{title}</p>
            <img
               src={arrow}
               className={clsx(styles['question__toggle'], {
                  [styles['question__toggle_open']]: isOpen,
               })}
               alt="arrow"
            />
         </div>
         <div
            className={clsx(styles['question__content'], {
               [styles['question__content_open']]: isOpen,
            })}
         >
            <div className={styles['question__content-top']}>
               <div className={styles['question__meta']}>
                  <QuestionMetric variant={'rating'} value={rate} />
                  <QuestionMetric variant={'complexity'} value={complexity} />
               </div>

               <Link to={`/questions/${id}`} className={styles['question__details']}>
                  Подробнее
               </Link>
            </div>
            <p className={styles.question__answer} dangerouslySetInnerHTML={{ __html: safeHTML }} />
         </div>
      </li>
   );
};
