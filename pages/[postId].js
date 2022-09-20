import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function BlogPost({ post }) {
  console.log(post);
  return (
    <div className="site-container">
      <div className="blog">
        <h2 className="blog-title">
          <Link href="/test">
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown>{post.details}</ReactMarkdown>
        </div>
        <div className="blog-date">{post.date}</div>
      </div>

      <footer></footer>
    </div>
  );
}

BlogPost.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`https://enisuzan-dev.vercel.app/api/post/${query.postId}`);
  //const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};
