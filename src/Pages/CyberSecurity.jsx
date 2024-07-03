import { CardItems } from "../Components/CardItems";
import PropTypes from "prop-types";

export const CyberSecurity = ({ cyberSecurity }) => {
  return (
    <div className="mb-5">
      <h2 className="text-primary my-3">Cyber Security Courses</h2>
      <div className="d-flex flex-wrap justify-content-around gap-5">
        {cyberSecurity.map((cyberSecurity) => (
          <div key={cyberSecurity.id}>
            <CardItems Courses={cyberSecurity} />
          </div>
        ))}
      </div>
    </div>
  );
};

CyberSecurity.propTypes = {
  cyberSecurity: PropTypes.arrayOf(),
};
