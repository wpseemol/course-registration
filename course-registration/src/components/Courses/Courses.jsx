import { useEffect, useState } from "react";
import Course from "./Course/Course";
import CourseSeclection from "../course-seclection/CourseSeclection";

const Courses = () => {
  const [coursesItems, setCoursesItem] = useState([]);

  useEffect(() => {
    fetch("course-registration.json")
      .then((res) => res.json())
      .then((data) => setCoursesItem(data));
  }, []);

  return (
    <main className="sm:mx-8 sm:mt-6 lg:mx-customMargin mx-3 mt-2">
      <section className="flex justify-center gap-6">
        {/* Courses section  */}

        <section className="grid grid-cols-3 gap-6">
          {coursesItems.map((coursesItem) => {
            console.log();
            return <Course key={coursesItem.id} coursItemObj={coursesItem} />;
          })}
        </section>

        {/* Courses selection section */}
        <section>
          <CourseSeclection />
        </section>
      </section>
    </main>
  );
};

export default Courses;
