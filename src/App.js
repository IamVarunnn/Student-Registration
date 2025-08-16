import { useState } from "react";
import "./App.css";
import "./App.css";

import CourseTypes from "./components/CourseTypes";
import Courses from "./components/Courses";
import CourseOfferings from "./components/CourseOfferings";
import StudentRegistrations from "./components/StudentRegistrations";
import Navbar from "./components/Navbar";

export default function App() {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [offerings, setOfferings] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  return (
    <div className="p-6 grid grid-cols-2 gap-6">
      <Navbar/>
      <CourseTypes courseTypes={courseTypes} setCourseTypes={setCourseTypes} />
      <Courses courses={courses} setCourses={setCourses} courseTypes={courseTypes} />
      <CourseOfferings offerings={offerings} setOfferings={setOfferings} courses={courses} />
      <StudentRegistrations
        registrations={registrations}
        setRegistrations={setRegistrations}
        offerings={offerings}
      />
    </div>
  );
}
