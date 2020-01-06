import "../styles/cv.scss";

const CurriculumVitae = ({ children }) => (
  <dl className="curriculum-vitae">{children}</dl>
);

const Job = ({ company, title, time, children = null }) => (
  <div className="curriculum-vitae__job">
    <dt>
      <time>{time}</time>
    </dt>
    <dd>
      <p className="curriculum-vitae__job-company">{company}</p>
      <p className="curriculum-vitae__job-title">{title}</p>
      {children && <div className="curriculum-vitae__job-description">{children}</div>}
    </dd>
  </div>
);

export default CurriculumVitae;
export { Job };
