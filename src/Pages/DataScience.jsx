import { CardItems } from "../Components/CardItems";
import PropTypes from "prop-types";

export const DataScience = ({ dataScience }) => {
  return (
    <div className="mb-5">
      <h2 className="text-primary my-3">Data Science Courses</h2>
      <div className="d-flex flex-wrap justify-content-around gap-5">
        {dataScience.map((dataScience) => (
          <div key={dataScience.id}>
            <CardItems Courses={dataScience} />
          </div>
        ))}
      </div>
    </div>
  );
};

DataScience.propTypes = {
  dataScience: PropTypes.arrayOf(),
};
