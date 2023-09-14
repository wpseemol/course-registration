import dollarSign from "../../../assets/dollarSign.svg";
import Frame from "../../../assets/Frame.svg";

const Course = ({ coursItemObj }) => {
  const { id, image, price, credit_hour, course_title, description } =
    coursItemObj;
 
  return (
    <div className="card bg-white rounded-xl">
      <figure className="p-4  ">
        <img
          src={image}
          alt={course_title}
          className="rounded-lg border h-80 object-contain bg-coustomBgColor"
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
          <button className="btn btn-primary capitalize w-full text-lg">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
