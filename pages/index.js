import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from 'react-markdown'


export default function Home({ posts }) {
  return (
    <div className="site-container">
      <Head>
        <title>Enis Uzan</title>
        <meta name="description" content="Enis Uzan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
      <div className="space-y-4">
          <h1 className="text-2xl font-bold">
            Merhaba, Ben Enis Uzan. Üniversite öğrencisi bir Front End
            Developer'ım.
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos illum
            minima quae, reiciendis nam et, ratione blanditiis minus odit culpa
            suscipit incidunt expedita aliquid eligendi inventore rerum at
            temporibus.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            vel, tempora adipisci nemo porro nulla quaerat in numquam sed
            debitis quidem hic cum, sapiente sit mollitia, exercitationem a quod
            fuga.
          </p>
        </div>
        <div className="hero-social-links">
          <Link href="https://twitter.com/uzanenis">
            <a className="social-link">Twitter</a>
          </Link>

          <Link href="https://www.linkedin.com/in/enisuzan/">
            <a className="social-link">LinkedIn</a>
          </Link>
        </div>
      </div>
      
      

      <footer></footer>
      <style jsx>{``}</style>
    </div>
  );

  
}
