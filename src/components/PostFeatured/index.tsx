import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

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

      <div className='flex flex-col gap-4 sm:justify-center'>
        <time className='text-slate-600 text-sm/tight' dateTime='2025-04-20'>
          20/04/2025 10:00
        </time>
        <PostHeading as='h1' url={postLink}>
          em ipsum dolor si
        </PostHeading>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          fugiat esse molestias, similique voluptatibus necessitatibus
          exercitationem dolore officia culpa debitis atque omnis, id pariatur
          qui blanditiis cum quis quibusdam eligendi!
        </p>
      </div>
    </section>
  );
}
