import { useEffect, useState } from "react";
import api from "../api";
import CourseList from "./CourseList";

const CoursePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const abortController = new AbortController();

      try {
        const result = await api.getCourses();
        // if (!result) {
        // 	throw new Error("A wild server error has occurred!");
        // }
        const data = await result.json();
        if (!abortController.signal.aborted) {
          setCourses(data.courses);
        }
      } catch (error) {
        throw Error(error);
      }
    };
    fetchData();
    return;
  }, [courses]);

  return (
    <main>
      <CourseList courses={courses} />
    </main>
  );
};

export default CoursePage;
