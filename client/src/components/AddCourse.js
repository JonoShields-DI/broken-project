import { useState } from "react";
import api from "../api";

const AddCourse = () => {
  const [price, setPrice] = useState(" ");
  const [name, setName] = useState(" ");
  const [description, setDescription] = useState(" ");

  const [pending, setPending] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await api.addNewCourse().then(() => {
      setPending(false);
      if (!response.ok) {
        setPending(true);
      } else {
        // navigate("/");
        alert("course posted!");
      }
      console.log(`Posted a new course!!!`, response);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="price">Asking price</label>

      <input
        type="text"
        id="price"
        value={price}
        required
        onChange={(event) => setPrice(event.target.value)}
      />

      <label htmlFor="name">Course name</label>
      <input
        type="text"
        id="name"
        value={name}
        required
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="description">Description:</label>

      <input
        type="text"
        id="description"
        value={description}
        required
        onChange={(event) => setDescription(event.target.value)}
      ></input>

      <div>
        {!pending && (
          <button className="button" type="submit">
            Submit
          </button>
        )}

        {pending && (
          <button disabled className="button">
            Adding course...
          </button>
        )}
      </div>
    </form>
  );
};

export default AddCourse;
