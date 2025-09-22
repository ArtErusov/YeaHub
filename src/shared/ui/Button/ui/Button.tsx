import clsx from 'clsx';
import { forwardRef } from 'react';
import type { ButtonProps } from '../model/types';
import styles from './Button.module.scss';

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
   (
      {
         variant = 'primary',
         size = 'M',
         fullWidth = false,
         destructive = false,
         preffix,
         suffix,
         badge,
         children,
         className,
         ...props
      },
      ref,
   ) => {
      const isLink = 'href' in props;
      const Component = (isLink ? 'a' : 'button') as React.ElementType;
      return (
         <Component
            ref={ref}
            className={clsx(
               styles.button,
               styles[`button-${variant}`],
               styles[`button-${size}`],
               fullWidth && styles['button-full'],
               destructive && styles['button-destructive'],
               className,
            )}
            {...props}
         >
            {preffix}
            {children}
            {suffix}
            {badge && badge !== '0' ? (
               <span className={styles['button-badge']}>{badge}</span>
            ) : null}
         </Component>
      );
   },
);

Button.displayName = 'Button';
