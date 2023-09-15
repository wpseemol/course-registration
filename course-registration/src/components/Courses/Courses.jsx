import { useEffect, useState } from "react";
import Course from "./Course/Course";
import CourseSeclection from "../course-seclection/CourseSeclection";
import { ToastContainer, toast } from "react-toastify";

const clickedId = [];
const creditHour = [];
const Courses = () => {
  const [coursesItems, setCoursesItem] = useState([]);

  useEffect(() => {
    fetch("course-registration.json")
      .then((res) => res.json())
      .then((data) => setCoursesItem(data));
  }, []);

  // click event add

  const [clickCoursItem, setClickCoursItem] = useState([]);
  const handelClickCoursItem = (props) => {
    if (!clickedId.includes(props.id)) {
      creditHour.push(props.credit_hour);
      let totalHour = creditHour.reduce((first, secent) => first + secent, 0);
      if (totalHour <= 20) {
        setClickCoursItem([...clickCoursItem, props]);
      } else {
        toast("Credit Hour Remaining is More Then 20hr.plase releod");
      }

      clickedId.push(props.id);
    } else {
      toast("The course is pre-selected!");
    }
  };

  return (
    <main className="sm:mx-8 sm:mt-6 lg:mx-customMargin mx-3 mt-2">
      <section className="flex justify-center gap-6 flex-col lg:flex-row items-center lg:items-start">
        {/* Courses section  */}

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesItems.map((coursesItem) => {
            console.log();
            return (
              <Course
                key={coursesItem.id}
                coursItemObj={coursesItem}
                handelClickCoursItem={handelClickCoursItem}
              />
            );
          })}
        </section>

        {/* Courses selection section */}
        <section>
          <CourseSeclection clickCoursItemObj={clickCoursItem} />
        </section>
      </section>
    </main>
  );
};

export default Courses;
