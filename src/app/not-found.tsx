import clsx from 'clsx';

export default function NotFoundPage() {
  return (
    <>
    <title>Pagina nao encontrada</title>

    <div
      className={clsx(
        'min-h-[320px] bg-slate-900 text-slate-100',
        'mb-16 p-8 rounded-xl',
        'flex items-center justify-center',
        'text-center',
      )}
    >
      <div>
        <h1 className='text-7xl/tight mb-8 font-extrabold'>Erro 404</h1>
        <p>A pagina que voce esta tentando acessar nao existe</p>
      </div>
    </div>
    </>
  );
}
