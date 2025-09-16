import { findAllPostsAdmin } from '@/lib/post/queries/admin';

export default async function PostsListAdmin() {
  const posts = await findAllPostsAdmin();

  return (
    <div className='py-16 text-4xl'>
      {posts.map(post => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
