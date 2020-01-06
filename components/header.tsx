import "../styles/header.scss";

const Header = () => (
  <header className="site-header">
    <h1 title="rademacher.digital">
      rademacher
      <br />
      <span className="dot">.</span>
      d<span className="i">i</span>gital
    </h1>
    <figure className="profile-pic">
      <img src="/nikolaus_rademacher.png" alt="Nikolaus Rademacher" />
    </figure>
  </header>
);

export default Header;