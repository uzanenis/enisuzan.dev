import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from 'react-markdown'


export default function BlogPage({ posts }) {
  return (
    <div className="site-container">
      
      
      {posts.map((post,idx) => (
        <div className="blog" key={idx}>
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
      
    </div>
  );

  
}

BlogPage.getInitialProps = async ({query}) => {
  const res = await fetch('https://enisuzan-dev.vercel.app/api/posts')
  //const res = await fetch('http://localhost:3000/api/posts')
  const json = await res.json()
  return { posts: json.posts }
}