import React, { useState } from "react";

const App = () => {
  const data = { first: "", last: "", phone: "", email: "" };
  const [inputData, setInputData] = useState(data);

  function handelData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    // setFlag(true);
    window.alert(`
    First Name: ${inputData.first}
    Last Name: ${inputData.last}
    Phone Number: ${inputData.phone}
    Email ID: ${inputData.email}`);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>

        <input
          type="text"
          name="first"
          value={inputData.first}
          onChange={handelData}
        ></input>

        <br></br>
        <label>Last Name:</label>
        <input
          type="text"
          name="last"
          value={inputData.last}
          onChange={handelData}
        ></input>
        <br></br>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={inputData.phone}
          onChange={handelData}
        ></input>
        <br></br>
        <label>Email ID:</label>
        <input
          type="email"
          name="email"
          value={inputData.email}
          onChange={handelData}
        ></input>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
