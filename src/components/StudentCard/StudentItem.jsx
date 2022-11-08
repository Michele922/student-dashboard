import { Link } from "react-router-dom";
import "./StudentItem.css";

const StudentItem = ({ student }) => {
  const { name, imgUrl, id } = student;

  return (
    <Link to={`/students/${id}`} className="student-item-container">
      <img src={imgUrl} />
      <div className="overlay">{name}</div>
    </Link>
  );
};

export default StudentItem;
