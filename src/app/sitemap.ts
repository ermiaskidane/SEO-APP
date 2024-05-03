import { BlogPostsResponse } from "@/models/BlogPost";
import { MetadataRoute } from "next";

// run http://localhost:3000/sitemap.xml on google to find the effect of this page
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: BlogPostsResponse = await response.json();

  const postEntries: MetadataRoute.Sitemap = posts.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`,
    // if u set to last updatedAt google would crawle through it
    // lastModified: new Date(post.updatedAt),
    // changeFrequency:,
    // priority:
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
    },
    ...postEntries,
  ];
}
