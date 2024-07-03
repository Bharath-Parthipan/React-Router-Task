import Card from "react-bootstrap/Card";
import PropTypes from "prop-types"

export const CardItems = ({ Courses }) => {
  const heading = Courses.coursesHeading.length > 51 ? Courses.coursesHeading.substring(0, 50) + "..." : Courses.coursesHeading;
  return (
    <div className="course-container">
      <Card style={{ width: "18rem", height: "320px", padding: "10px"}}>
        <Card.Img variant="top" src={Courses.banner} style={{ height: "150px", objectFit: "cover" }}/>
        <Card.Body>
          <Card.Title>{heading}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

CardItems.propTypes = {
  Courses: PropTypes.arrayOf()
}