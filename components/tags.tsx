import styles from "./tags.module.scss";

const Tags = ({ items }) => (
  <ul className={styles.tagList}>
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default Tags;