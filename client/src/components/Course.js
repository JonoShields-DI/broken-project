const Course = ({ id, name, description, price, location, teachers }) => {
  return (
    <li key={id}>
      <h3>{name}</h3>
      <p>{price}</p>
      <article>{description}</article>
      <p>{location}</p>
      <p>{teachers}</p>
    </li>
  );
};

export default Course;
