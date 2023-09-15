import PropTypes from "prop-types";

const CourseSeclection = ({ clickCoursItemObj }) => {
  let isSelecteItem =
    clickCoursItemObj.length < 0 ? 0 : clickCoursItemObj.length;
  let remCreditHour = 20;
  let creditHour = 0;
  let totalPrice = 0;
  if (!isSelecteItem <= 0) {
    clickCoursItemObj.forEach((element) => {
      creditHour += element.credit_hour;
      totalPrice += element.price;
    });
  }

  remCreditHour -= creditHour;

  return (
    <div className="card xl:w-80 lg:w-48 sm:w-96 bg-white rounded-xl p-6">
      <h2
        className="text-lg font-bold border-b-2
           pb-4 text-primary"
      >
        Credit Hour Remaining <span>{remCreditHour}</span>hr
      </h2>

      <div className={isSelecteItem <= 0 ? "hidden" : ""}>
        <h2
          className="text-xl font-bold
               pt-4 pb-5 "
        >
          Course Name
        </h2>

        <ol className="list-decimal list-inside text-base">
          {!isSelecteItem <= 0
            ? clickCoursItemObj.map((element, inx) => {
                return <Title key={inx} title={element.course_title} />;
              })
            : ""}
        </ol>

        <h4 className="font-medium border-t-2 py-4 mt-4">
          Total Credit Hour :{" "}
          <span>{!(remCreditHour < 0) ? creditHour : 0}</span>
        </h4>
        <h3 className="font-semibold border-t-2 py-4">
          Total Price : <span>{totalPrice.toFixed(2)}</span> USD
        </h3>
      </div>
    </div>
  );
};

function Title({ title }) {
  return <li className="pb-2">{title}</li>;
}

CourseSeclection.propTypes = {
  clickCoursItemObj: PropTypes.object.isRequired,
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CourseSeclection;
