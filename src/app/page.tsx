import { delay } from "@/lib/utils";
import { BlogPostsResponse } from "@/models/BlogPost";
import Link from "next/link";

export default async function BlogPage() {
  // note that all this with the await delay(1000) won't run
  // after first compiled a next time user visits it will generate 
  // with out loading effect ---- cache effect

  // this page is static content to find out run "npm run build"
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: BlogPostsResponse = await response.json();

  await delay(1000);

  return (
    <div className="max-w-prose m-auto space-y-5">
      <h1 className="text-3xl text-center mb-3 font-bold">Posts</h1>
      {posts.map(({ id, title }) => (
        <article key={title}>
          <h2>
            <Link href={`/posts/${id}`} className="text-lg font-bold">
              {title}
            </Link>
          </h2>
        </article>
      ))}
    </div>
  );
}
