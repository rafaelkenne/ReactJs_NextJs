import "./styles.css";
import P from "prop-types";

export const PostCard = ({ title, body, id, cover }) => (
  <div className="post">
    <img src={cover} alt={title}></img>
    <div className="post-content">
      <h1>
        {title} {id}
      </h1>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: P.string.isRequired,
  body: P.string.isRequired,
  cover: P.string.isRequired,
  id: P.number.isRequired,
};
