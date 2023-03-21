const api = {
  // tests post requests to api (no db)
  postRequest: async () => {
    const response = await fetch(`http://localhost:5001/test`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    const newTestMessage = result.message;
    console.log(newTestMessage);
    return newTestMessage;
  },
  // adds course to api db
  addNewCourse: async (name, description, price) => {
    const course = {
      name,
      description,
      price,
    };

    const response = await fetch(`http://localhost:5001/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });

    const result = await response.json();
    const newCourse = result;
    console.log(newCourse);
    return newCourse;
  },

  getCourses: async () => {
    await fetch(`http://localhost:5001/ `);
  },

  // tests get requests to api (no db)
  getRequest: async () => {
    const response = await fetch(`http://localhost:5001/test`, {
      method: "GET",
    });
    const result = await response.json();
    const newTestMessage = result.message;
    console.log(newTestMessage);
    return newTestMessage;
  },
};

export default api;
