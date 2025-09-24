import type { SkeletonProps } from '../model/types';
import styles from './Skeleton.module.scss';

export const Skeleton = ({ children = 'Загрузка...' }: SkeletonProps) => {
   return (
      <div className={styles['skeleton']}>
         <p className={styles['skeleton__title']}>{children}</p>
      </div>
   );
};
