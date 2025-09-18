import clsx from 'clsx';
import { FileTextIcon, HouseIcon } from 'lucide-react';
import Link from 'next/link';

export function MenuAdmin() {
  const navClasses = clsx(
    'bg-slate-900 text-slate-100 rounded-lg',
    'flex flex-col',
    'mb-8',
    'overflow-hidden',
    'sm": flex-row sm:flex-wrap',
  );
  const linkClasses = clsx(
    '[&>svg]:w-[16px] [&>svg]:h-[16px] px-4',
    'flex items-center gap-2',
    'transition hover:bg-slate-800',
    'rounded-lg',
    // 'h-10',
    'shrink-0',
  );
  return (
    <nav className={navClasses}>
      <a className={linkClasses} href='/' target='_blank'>
        <HouseIcon></HouseIcon>
        Home
      </a>
      <Link className={linkClasses} href='/admin/post'>
        <FileTextIcon></FileTextIcon>Posts
      </Link>
    </nav>
  );
}
