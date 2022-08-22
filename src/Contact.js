import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [state, setState] = useState({});

  const updateData = (e) => {
    state[e.target.id] = e.target.value;
  };

  const getData = () => {
    console.log(state);
  };

  return (
    <div>
      <p>this is the contact page</p>
      <input onChange={updateData} id="Name" />
      <input onChange={updateData} id="lastName" />
      <button onClick={getData}>Get Data</button>

      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default Contact;
