import { useEffect } from "react";
import Course from "./Course/Course";



const Courses = () => {
  

    return (
      <main className="sm:mx-8 sm:mt-6 lg:mx-customMargin mx-3 mt-2">
        <section className="flex justify-center items-center gap-6">
          {/* Courses section  */}
          <section className="grid grid-cols-3">
            <Course></Course>
          </section>

          {/* Courses selection section */}
          <section className="border">Course seclection sefcton</section>
        </section>
      </main>
    );
};

export default Courses;