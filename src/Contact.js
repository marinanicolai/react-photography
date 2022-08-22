import "./App.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <p>this is the contact page</p>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default Contact;
