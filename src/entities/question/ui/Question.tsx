import clsx from 'clsx';
import DOMPurify from 'dompurify';
import { useState } from 'react';
import arrow from '/svg/arrowOpen.svg';
import { Link } from 'react-router-dom';

import styles from './Question.module.scss';
import type { QuestionType } from '@/shared/types/QuestionType';
import InfoItem from '@/shared/ui/InfoItem';

function Question({ id, rate, title, complexity, shortAnswer }: QuestionType) {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const safeHTML = DOMPurify.sanitize(shortAnswer);

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
                  <InfoItem variant={'rating'} value={rate} />
                  <InfoItem variant={'complexity'} value={complexity} />
               </div>

               <Link to={`/questions/${id}`} className={styles['question__details']}>
                  Подробнее
               </Link>
            </div>
            <p className={styles.question__answer} dangerouslySetInnerHTML={{ __html: safeHTML }} />
         </div>
      </li>
   );
}

export default Question;
