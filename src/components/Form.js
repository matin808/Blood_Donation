import { useState } from "react";
import firebase from "./firebase";
import '../styles/Form.css';

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

  const createData = () => {
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
      <h1 className="form__heading">Donate Blood</h1>

      <h3 className="form__subHeading">Your Name : </h3>
      <input
        className="form__input"
        onChange={onChangeName}
        value={name}
        type="text"
      />

      <h3 className="form__subHeading">Your Blood Group : </h3>
      <input
        className="form__input"
        onChange={onChangeBloodGroup}
        value={bloodGroup}
        type="text"
      />

      <h3 className="form__subHeading">Location : </h3>
      <input
        className="form__input"
        onChange={onChangeLocation}
        value={location}
        type="text"
        placeholder="where you are avalable for blood donation"
      />

      <h3 className="form__subHeading">Your Number : </h3>
      <input
        className="form__input"
        onChange={onChangeNumber}
        value={number}
        type="number"
      />

      <button onClick={createData}>Post</button>
    </div>
  );
}

export default Form;
