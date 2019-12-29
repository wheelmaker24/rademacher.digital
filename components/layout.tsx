import Header from "./header";
import Footer from "./footer";

import "../styles/globals.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;