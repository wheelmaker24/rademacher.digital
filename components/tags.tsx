import "../styles/tags.scss";

const Tags = ({ items }) => (
  <ul className="tag-list">
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default Tags;