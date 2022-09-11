import { getPosts } from "../../src/blog-post";

export default async function handler(req, res) {
  const posts = getPosts();
  res.json({ posts });
}
