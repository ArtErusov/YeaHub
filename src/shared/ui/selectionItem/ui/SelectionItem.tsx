import clsx from 'clsx';
import type { SelectionItemProps } from '../model/types';
import styles from './SelectionItem.module.scss';

function SelectionItem({ text, onClick, isSelected }: SelectionItemProps) {
   return (
      <li
         className={clsx(styles['selection-item'], {
            [styles['selection-item_active']]: isSelected,
         })}
         onClick={onClick}
      >
         {text}
      </li>
   );
}

export default SelectionItem;
