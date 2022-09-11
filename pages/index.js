import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from 'react-markdown'


export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero">
        <h1 className="hero-title">Enis Uzan</h1>
        <div className="hero-social-links">
          <Link href="https://twitter.com/uzanenis">
            <a className="social-link">Twitter</a>
          </Link>

          <Link href="https://www.linkedin.com/in/enisuzan/">
            <a className="social-link">LinkedIn</a>
          </Link>
        </div>
      </div>
      
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

Home.getInitialProps = async ({query}) => {
  const res = await fetch('http://localhost:3000/api/posts')
  const json = await res.json()
  return { posts: json.posts }
}