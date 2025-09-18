// src/components/ui/Button.tsx
import type { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'outline';
}

export function Button({ children, variant = 'default', className = '', ...props }: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors';
  const variantClasses = variant === 'default'
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'border border-gray-400 text-gray-700 hover:bg-gray-100';

  return (
    <button className={clsx(baseClasses, variantClasses, className)} {...props}>
      {children}
    </button>
  );
}
