import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import { PostSummary } from '../PostSummary';

export function PostFeatured() {
  const slug = 'qualquer';
  const postLink = `/post/${slug}`;
  return (
    <section
      className='grid grid-cols-1 gap-8 mb-16
      sm:grid-cols-2 group'
    >
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_9.png',
          alt: 'alt da imagem',
          priority: true,
        }}
      />
      <PostSummary
        postLink={postLink}
        postHeading='h1'
        createdAt={'2223'}
        excerpt={'nest'}
        title={'sada'}
      />
    </section>
  );
}
