import { CardItems } from "../Components/CardItems";
import PropTypes from "prop-types";

export const FullStackDevelopment = ({ fullStackCourses }) => {
  return (
    <div className="mb-5">
      <h2 className="text-primary my-3">Full-Stack Development Programs</h2>
      <div className="d-flex flex-wrap justify-content-around gap-5">
        {fullStackCourses.map((fullStackCourses) => (
          <div key={fullStackCourses.id}>
            <CardItems Courses={fullStackCourses} />
          </div>
        ))}
      </div>
    </div>
  );
};

FullStackDevelopment.propTypes = {
  fullStackCourses: PropTypes.arrayOf(),
};
