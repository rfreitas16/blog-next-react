'use client';
import { logoutAction } from '@/actions/login/logout';
import clsx from 'clsx';
import {
  CircleXIcon,
  FileTextIcon,
  HourglassIcon,
  HouseIcon,
  LogOutIcon,
  MenuIcon,
  PlusIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MouseEvent, useEffect, useState, useTransition } from 'react';

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navClasses = clsx(
    'bg-slate-900 text-slate-100 rounded-lg',
    'flex flex-col  mb-8',
    'sm:flex-row sm:flex-wrap',
    // 'h-10',
    // 'overflow-hidden',
    !isOpen && 'h-10',
    !isOpen && 'overflow-hidden',
    'sm:overflow-visible sm:h-auto',
  );
  const linkClasses = clsx(
    '[&>svg]:w-[16px] [&>svg]:h-[16px] px-4',
    'flex items-center justify-start gap-2',
    'cursor-pointer',
    'transition hover:bg-slate-800 rounded-lg',
    'h-10',
    'shrink-0',
  );
  const openCloseBtnClasses = clsx(
    linkClasses,
    'text-blue-200 italic, sm:hidden',
  );

  function handleLogout(
    e: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) {
    e.preventDefault();
    startTransition(async () => {
      await logoutAction();
    });
  }
  return (
    <nav className={navClasses}>
      <button
        onClick={() => {
          setIsOpen(s => !s);
        }}
        className={openCloseBtnClasses}
      >
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}
        {isOpen && (
          <>
            <CircleXIcon />
            Fechar
          </>
        )}
      </button>
      <a className={linkClasses} href='/' target='_blank'>
        <HouseIcon></HouseIcon>
        Home
      </a>
      <Link className={linkClasses} href='/admin/post'>
        <FileTextIcon></FileTextIcon>Posts
      </Link>
      <Link className={linkClasses} href='/admin/post/new'>
        <PlusIcon></PlusIcon>Criar post
      </Link>

      <a onClick={handleLogout} href='#' className={linkClasses}>
        {isPending && (
          <>
            <HourglassIcon />
            Aguarde...
          </>
        )}
        {!isPending && (
          <>
            <LogOutIcon />
            Sair
          </>
        )}
      </a>
    </nav>
  );
}
