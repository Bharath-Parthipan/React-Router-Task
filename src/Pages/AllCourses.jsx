import { CardItems } from "../Components/CardItems";
import PropTypes from "prop-types";


export const AllCourses = ({ allCourses }) => {
  console.log(allCourses);
  return (
    <div className="mb-5">
      <h2 className="text-primary my-3">All Courses</h2>
      <div className="d-flex flex-wrap justify-content-around gap-5">
        {allCourses.map((Courses) => (
          <div key={Courses.id}>
            <CardItems Courses={Courses} />
          </div>
        ))}
      </div>
    </div>
  );
};

AllCourses.propTypes = {
  allCourses: PropTypes.arrayOf(),
};