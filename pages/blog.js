import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from 'react-markdown'


export default function BlogPage({ posts }) {
  return (
    <div className="site-container">
      
      
      {posts.map((post) => (
        <div className="blog" key={post.slug}>
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown>{post.details}</ReactMarkdown>
        </div>
        <div className="blog-date">{post.date}</div>
      </div>
      ))}

      <footer></footer>
      <style jsx>{``}</style>
    </div>
  );

  
}

BlogPage.getInitialProps = async ({query}) => {
  const res = await fetch('http://enisuzan-dev.vercel.app/api/posts')
  //const res = await fetch('http://localhost:3000/api/posts')
  const json = await res.json()
  return { posts: json.posts }
}