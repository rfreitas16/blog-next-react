import clsx from 'clsx';

type ButtonVariants = 'default' | 'danger' | 'ghost';
type ButtonSizes = 'sm' | 'md' | 'lg';
type ButtonProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
} & React.ComponentProps<'button'>;
export function Button({
  variant = 'default',
  size = 'md',
  ...props
}: ButtonProps) {
  const buttonVariants: Record<ButtonVariants, string> = {
    default: clsx('bg-blue-600 text-blue-100 hover:bg-blue-700'),
    ghost: clsx('bg-slate-300 text-slate-900 hover:bg-slate-400'),
    danger: clsx('bg-red-600 text-red-100 hover:bg-red-700'),
  };
  const buttonSizes: Record<ButtonSizes, string> = {
    sm: clsx(
      'text-xs/tight py-1 px-2 rounded-sm',
      '[&_svg]:w-4 [&_svg]:h-4 gap-1',
    ),
    md: clsx(
      'text-md/tight py-2 px-4 rounded-md',
      '[&_svg]:w-5 [&_svg]:h-5 gap-2',
    ),
    lg: clsx(
      'text-lg/tight py-4 px-6 rounded-lg',
      '[&_svg]:w-6 [&_svg]:h-6 gap-3',
    ),
  };
  const buttonClasses = clsx(
    buttonVariants[variant],
    buttonSizes[size],
    'flex items-center justify-center cursor-pointer',
    'transition',
    'disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed',
    props.className,
  );

  return <button {...props} className={buttonClasses} />;
}
