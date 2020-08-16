import styles from "./header.module.scss";

const Header = () => (
  <header className={styles.siteHeader}>
    <h1 title="rademacher.digital – Nikolaus Rademacher, Frontend Web Developer">
      rademacher
      <br />
      <span className={styles.dot}>.</span>
      d<span className={styles.i}>i</span>gital
    </h1>
    <figure className={styles.profilePic}>
      <img src="/nikolaus_rademacher.png" alt="Nikolaus Rademacher (Photo), Frontend Web Developer" />
    </figure>
  </header>
);

export default Header;