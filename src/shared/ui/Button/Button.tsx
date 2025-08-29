import clsx from 'clsx';
import {
   type ButtonHTMLAttributes,
   type AnchorHTMLAttributes,
   type ReactNode,
   forwardRef,
} from 'react';
import styles from './Button.module.scss';

// Константы для вариантов и размеров кнопки
export const BUTTON_VARIANTS = ['primary', 'secondary', 'link'] as const;
export const BUTTON_SIZES = ['S', 'M', 'L'] as const;

// Типы для вариантов и размеров
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
export type ButtonSize = (typeof BUTTON_SIZES)[number];

// Типизация пропсов кнопки
export interface BaseButtonProps {
   variant?: ButtonVariant;
   size?: ButtonSize;
   fullWidth?: boolean;
   destructive?: boolean;
   preffix?: ReactNode;
   suffix?: ReactNode;
   badge?: ReactNode;
}

type ButtonProps = BaseButtonProps &
   (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

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
      // Определяем, какой HTML-элемент использовать
      const tagName = props.href ? 'a' : 'button';
      const Component = tagName as React.ElementType;

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
