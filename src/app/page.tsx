import { Container } from '@/components/container';
import { Header } from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostFeatured } from '@/components/PostFeatured';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostList';
import { SpinsLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinsLoader />}>
        <PostFeatured />
      </Suspense>
      <Suspense fallback={<SpinsLoader />}>
        <PostsList />
      </Suspense>
    </Container>
  );
}
