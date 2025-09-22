import clsx from 'clsx';
import ArrowIcon from '@shared/assets/icon/Arrow_btn.svg?react';
import styles from '../Pagination.module.scss';

interface ArrowButtonProps {
   direction?: 'prev' | 'next';
   onClick: () => void;
   disabled?: boolean;
}

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
