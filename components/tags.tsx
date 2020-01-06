import "../styles/tags.scss";

const Tags = ({ items }) => (
  <ul className="tag-list">
    {items.map(item => (
      <li>{item}</li>
    ))}
  </ul>
);

export default Tags;