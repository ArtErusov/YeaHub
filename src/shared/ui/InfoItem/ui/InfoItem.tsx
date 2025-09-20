import type { InfoItemProps } from '../model/types';
import styles from './InfoItem.module.scss';

function InfoItem({ variant, value }: InfoItemProps) {
   const textSelection = variant === 'rating' ? 'Рейтинг' : 'Сложность';

   return (
      <div className={styles['info-item']}>
         <p className={styles['info-item__variant']}>{`${textSelection}:`}</p>
         <div className={styles['info-item__value']}>{value}</div>
      </div>
   );
}

export default InfoItem;
