import { Container } from '@/components/container';
import { Header } from '@/components/Header';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostList';
import { SpinsLoader } from '@/components/SpinLoader';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section
        className='grid grid-cols-1 gap-8 mb-16
      sm:grid-cols-2 group'
      >
        <Link href='#' className='w-full h-full overflow-hidden'>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-105 transition rounded-xl'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='titulo do post'
            priority
          ></Image>
        </Link>
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time  className='text-slate-600 text-sm/tight' dateTime='2025-04-20'>20/04/2025 10:00</time>
        <PostHeading as='h1' url='#'>em ipsum dolor si</PostHeading>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            fugiat esse molestias, similique voluptatibus necessitatibus
            exercitationem dolore officia culpa debitis atque omnis, id pariatur
            qui blanditiis cum quis quibusdam eligendi!
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinsLoader />}>
        <PostsList />
      </Suspense>
    </Container>
  );
}
