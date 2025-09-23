import ArrowIcon from '@shared/assets/icon/Arrow_btn.svg?react';
import clsx from 'clsx';
import type { ArrowButtonProps } from '../../model/types';
import styles from '../Pagination.module.scss';

export function ArrowButton({ direction = 'prev', onClick, disabled }: ArrowButtonProps) {
   return (
      <button onClick={onClick} disabled={disabled}>
         <ArrowIcon
            className={clsx(styles['pagination__btn-arrow'], {
               [styles['pagination__btn-arrow_next']]: direction === 'next',
            })}
         />
      </button>
   );
}
