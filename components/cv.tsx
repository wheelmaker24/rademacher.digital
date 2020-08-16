import styles from "./cv.module.scss";

const CurriculumVitae = ({ children }) => (
  <dl>{children}</dl>
);

const Job = ({ company, title, time, children = null }) => (
  <div className={styles.job}>
    <dt>
      <time>{time}</time>
    </dt>
    <dd>
      <p className={styles.company}>{company}</p>
      <p className={styles.jobTitle}>{title}</p>
      {children && (
        <div className={styles.jobDescription}>{children}</div>
      )}
    </dd>
  </div>
);

const WorkList = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default CurriculumVitae;
export { Job, WorkList };
