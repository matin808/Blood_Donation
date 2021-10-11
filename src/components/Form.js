import { useState } from "react";
import firebase from "./firebase";
import "../styles/Form.css";
import Life from "../images/health-care.png";

function Form() {
  const [name, setName] = useState("");
  const [bloodGroup, setbloodGroup] = useState("");
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBloodGroup = (e) => {
    setbloodGroup(e.target.value);
  };

  const onChangeLocation = (e) => {
    setLocation(e.target.value);
  };

  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const createData = (e) => {
    e.preventDefault();
    const bloodRef = firebase.database().ref("BloodData");
    const bloodReport = {
      name,
      bloodGroup,
      location,
      number,
      complete: false,
    };
    bloodRef.push(bloodReport);
  };

  return (
    <div className="form">
      <div className="form__container">
        <h1 className="form__heading">Donate Blood</h1>

        <div className="form__container_two">
        <div className="form__image form__right">
          <img className="form__mainImage" src={Life} alt="" />
        </div>

        <form className="form__left">
          <h3 className="form__subHeading">Name</h3>
          <input
         
            className="form__input"
            onChange={onChangeName}
            value={name}
            type="text"
            required
          />

          <h3 className="form__subHeading">Blood Group</h3>
          <input
            className="form__input"
            onChange={onChangeBloodGroup}
            value={bloodGroup}
            type="text"
            required
          />

          <h3 className="form__subHeading">Pin Code</h3>
          <input
            className="form__input"
            onChange={onChangeLocation}
            value={location}
            type="text"
            required
            
          />

          <h3 className="form__subHeading">Number</h3>
          <input
            className="form__input"
            onChange={onChangeNumber}
            value={number}
            type="number"
            required
          />

          <button type = "submit" className = "form__btn" onClick={createData}>Post</button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
