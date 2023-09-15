import PropTypes from "prop-types";
import dollarSign from "../../../assets/dollarSign.svg";
import Frame from "../../../assets/Frame.svg";

const Course = ({ coursItemObj, handelClickCoursItem }) => {
  const { image, price, credit_hour, course_title, description } = coursItemObj;

  return (
    <div className="card bg-white rounded-xl">
      <figure className="m-4  border rounded-lg">
        <img
          src={image}
          alt={course_title}
          className="2xl:h-60 object-contain bg-coustomBgColor"
        />
      </figure>
      <div className="card-body p-4 pt-0 rounded-xl">
        <h2 className="card-title text-lg py-0">{course_title}</h2>
        <p className="text-sm font-normal mt-3 mb-5">{description}</p>
        <div
          className="flex justify-start 
            items-center font-medium text-base"
        >
          <div className="mr-3">
            <img src={dollarSign} alt="dollar sign" />
          </div>
          <p className="w-0">
            Price : <span>{price}</span>
          </p>
          <div className="mr-3">
            <img src={Frame} alt="dollar sign" />
          </div>
          <p className="w-fit">
            Credit : <span>{credit_hour}</span>hr
          </p>
        </div>
        <div className="card-actions mt-6">
          <button
            className="btn btn-primary capitalize w-full text-lg"
            onClick={() => {
              handelClickCoursItem(coursItemObj);
            }}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  coursItemObj: PropTypes.object.isRequired,
  handelClickCoursItem: PropTypes.func.isRequired,
};

export default Course;
