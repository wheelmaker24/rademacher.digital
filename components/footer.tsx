import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.siteFooter}>
    <p>
      <strong>Impressum</strong>
      <br />
      (Angaben gemäß § 5 TMG)
    </p>
    <address>
      Nikolaus Rademacher
      <br />
      Grunerstr. 26
      <br />
      40239 Düsseldorf{" "}
    </address>
    <p>
      <strong>Vertreten durch: </strong>
      <br />
      Nikolaus Rademacher
    </p>
    <p>
      <strong>Kontakt: </strong>
      <br />
      Telefon: 0162-2963080
      <br />
      E-Mail: mail@rademacher.digital
    </p>
    &copy; 2020 Nikolaus Rademacher
  </footer>
);

export default Footer;
