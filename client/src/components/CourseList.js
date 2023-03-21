import Course from "./Course";

const CourseList = ({ courses }) => {
  return (
    <ul>
      {courses.map((course) => {
        <Course
          name={course.name}
          description={course.description}
          price={course.price}
          location={course.location}
          teachers={course.teachers}
          key={course.id}
        />;
      })}
    </ul>
  );
};

export default CourseList;
