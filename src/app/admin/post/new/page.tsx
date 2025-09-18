import { Button } from '@/components/Button';
import { BugIcon } from 'lucide-react';

export const dynamic = 'force-dynamic';
export default async function AdminPostNewPage() {
  return (
    <div>
      <div className='py-16 flex gap-4 flex-wrap items-center'>
        <Button variant='default' size='sm'>
          <BugIcon></BugIcon>Confirma
        </Button>
        <Button variant='ghost' size='md'>
          <BugIcon></BugIcon>Confirma
        </Button>
        <Button variant='danger' size='lg'>
          <BugIcon></BugIcon>Confirma
        </Button>
      </div>
      <div className='py-16 flex gap-4 flex-wrap items-center'>
        <Button variant='default' size='sm' disabled>
          <BugIcon></BugIcon>Confirma
        </Button>
        <Button variant='ghost' size='md' disabled>
          <BugIcon></BugIcon>Confirma
        </Button>
        <Button variant='danger' size='lg' disabled>
          <BugIcon></BugIcon>Confirma
        </Button>
      </div>
    </div>
  );
}
