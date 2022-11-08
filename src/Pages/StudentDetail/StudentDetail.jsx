import { useParams } from "react-router-dom";

const StudentDetail = () => {
  const { studentId } = useParams();

  return (
    <>
      <p>{studentId}</p>
    </>
  );
};

export default StudentDetail;
