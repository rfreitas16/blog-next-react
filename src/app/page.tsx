import { PostsList } from "@/components/PostList";
import { SpinsLoader } from "@/components/SpinLoader";
import { Suspense } from "react";


export default async function HomePage() {

  return (
    <Suspense fallback={<SpinsLoader />}>
      <PostsList/>

    </Suspense>

  );
}
