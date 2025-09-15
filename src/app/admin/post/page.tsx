import { findAllPostsAdmin } from "@/lib/post/queries/admin";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Post Admin',
}
export default async function AdminPostPage() {
  const posts = await findAllPostsAdmin()
  return <div className='py-16 text-4xl'>
    {posts.map(post =>{
      return <p key={post.id}>{post.title}</p>
    })}
  </div>;
}
