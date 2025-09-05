import { Container } from '@/components/container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostList';
import { SpinsLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<SpinsLoader />}>
        <PostsList />
      </Suspense>
    </Container>
  );
}
