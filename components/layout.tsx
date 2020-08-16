import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import SchemaData from "./schema";
import styles from "./layout.module.scss";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>rademacher.digital – frontend web developer / UX engineer</title>
      <link href="https://fonts.googleapis.com/css?family=Exo:400,400i,900,900i&display=swap&subset=latin-ext" rel="stylesheet" />
    </Head>
    <Header />
    <main className={styles.siteContent}>
      {children}
    </main>
    <Footer />
    <SchemaData />
  </>
);

export default Layout;