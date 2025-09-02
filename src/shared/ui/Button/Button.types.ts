import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from "react";

// Константы для вариантов и размеров
export const BUTTON_VARIANTS = ["primary", "secondary", "link"] as const;
export const BUTTON_SIZES = ["S", "M", "L"] as const;

// Типы для вариантов и размеров
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
export type ButtonSize = (typeof BUTTON_SIZES)[number];

// Базовые пропсы (общие для ссылки и кнопки)
export interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  destructive?: boolean;
  preffix?: ReactNode;
  suffix?: ReactNode;
  badge?: ReactNode;
}

// Пропсы для <button>
export type ButtonAsButton = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

// Пропсы для <a>
export type ButtonAsAnchor = BaseButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

// Итоговый тип
export type ButtonProps = ButtonAsButton | ButtonAsAnchor;