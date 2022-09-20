import Head from "next/head";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div className="site-container">
      <Head>
        <title>Enis Uzan</title>
        <meta name="description" content="Enis Uzan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container-01">
        <h3 className="c-title-01">Merhaba, Ben Enis Uzan.</h3>

        <h3 className="c-title-02">
          Biraz öğrenci biraz da{" "}
          <span className="animate-rainbow">Front End Developer.</span>
        </h3>

        <p className="">
          Şu anda <Link href="http://feux.digital/">
            <a target="_blank" className="inside-social-link">Feux</a>
          </Link> şirketinde Front End Developer olarak çalışıyorum.
          
        </p>

        <p>
          Güncel olarak React, Javascript ve Sass kullanıyorum.
        </p>
      </div>

      <footer>
        <div className="social-links space-x-2">
        <Link href="mailto:uzanenis@outlook.com">
            <a target="_blank" className="social-link">E-Mail</a>
          </Link>

          <Link href="https://twitter.com/uzanenis">
            <a target="_blank" className="social-link sc-twitter"></a>
          </Link>

          <Link href="https://github.com/uzanenis">
            <a target="_blank" className="social-link sc-github"></a>
          </Link>

          <Link href="https://www.linkedin.com/in/enisuzan/">
            <a target="_blank" className="social-link sc-linkedin"></a>
          </Link>

          <Link href="https://www.instagram.com/uzanenis">
            <a target="_blank" className="social-link sc-instagram">
              
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
}
