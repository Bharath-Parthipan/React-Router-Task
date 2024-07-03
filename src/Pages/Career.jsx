import { CardItems } from "../Components/CardItems";
import PropTypes from "prop-types";

export const Career = ({ career }) => {
  return (
    <div className="mb-5">
      <h2 className="text-primary my-3">Career Programs</h2>
      <div className="d-flex flex-wrap justify-content-around gap-5">
        {career.map((career) => (
          <div key={career.id}>
            <CardItems Courses={career} />
          </div>
        ))}
      </div>
    </div>
  );
};

Career.propTypes = {
  career: PropTypes.arrayOf(),
};
