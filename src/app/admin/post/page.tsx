import PostsListAdmin from '@/components/PostsListAdmin';
import { SpinsLoader } from '@/components/SpinLoader';
import { findAllPostsAdmin } from '@/lib/post/queries/admin';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Post Admin',
};
export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpinsLoader className='mb-16' />}>
      <PostsListAdmin />
    </Suspense>
  );
}
