import { Link } from "react-router-dom";
import "./StudentItem.css";

const StudentItem = ({ student, itemType }) => {
  const { name, imgUrl, age, email, phoneNumber } = student;

  if (itemType === "image") {
    return (
      <Link to={`/students/${name}`} className="student-item-image-container">
        <img src={imgUrl} />
        <div className="overlay">{name}</div>
      </Link>
    );
  }

  if (itemType === "details") {
    return (
      <div className="student-item-card-container">
        <h1>Student</h1>
        <div>
          <p>
            <i>Name:</i> {name}
          </p>
          <p>
            <i>Age:</i> {age}
          </p>
          <p>
            <i>Email:</i> {email}
          </p>
          <p>
            <i>Phone:</i> {phoneNumber}
          </p>
        </div>
      </div>
    );
  }
};

export default StudentItem;
