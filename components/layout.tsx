import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import "../styles/globals.scss";
import "../styles/layout.scss";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>rademacher.digital</title>
      <link href="https://fonts.googleapis.com/css?family=Exo:400,400i,900,900i&display=swap&subset=latin-ext" rel="stylesheet" />
    </Head>
    <Header />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;