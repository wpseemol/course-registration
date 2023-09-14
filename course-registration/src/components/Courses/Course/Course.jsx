import dollarSign from "../../../assets/dollarSign.svg";
import Frame from "../../../assets/Frame.svg";

const Course = () => {
  return (
    <div className="card bg-white rounded-xl">
      <figure className="p-4">
        <img
          src="https://i.ibb.co/6wH8V0Q/Cybersecurity-Essentials.gif"
          alt="Shoes"
          className="rounded-lg"
        />
      </figure>
      <div className="card-body p-4 pt-0 rounded-xl">
        <h2 className="card-title text-lg py-0">
          Introduction to C Programming
        </h2>
        <p className="text-sm font-normal mt-3 mb-5">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div
          className="flex justify-start 
            items-center font-medium text-base">
          <div className="mr-3">
            <img src={dollarSign} alt="dollar sign" />
          </div>
          <p className="w-0">
            Price : <span>2000</span>
          </p>
          <div className="mr-3">
            <img src={Frame} alt="dollar sign" />
          </div>
          <p className="w-fit">
            Credit : <span>2</span>hr
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
