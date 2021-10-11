import React from "react";
import firebase from "firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import "../styles/Blood.css";

function Blood({ bloodData }) {
  const deleteData = () => {
    const bloodRef = firebase.database().ref("BloodData").child(bloodData.id);
    bloodRef.remove();
  };
  return (
    <div className="blood__data">
      <div className="blood__data_container">
        <h3 className="blood__data_heading">
          <label className="blood__data_label" htmlFor="">
            Name :{" "}
          </label>{" "}
          {bloodData.name}
        </h3>
        <h3 className="blood__data_heading">
          <label className="blood__data_label" htmlFor="">
            Blood Group :{" "}
          </label>{" "}
          {bloodData.bloodGroup}
        </h3>
        <h3 className="blood__data_heading">
          <label className="blood__data_label" htmlFor="">
            Pin Code :{" "}
          </label>{" "}
          {bloodData.location}
        </h3>
        <h3 className="blood__data_heading">
          <label className="blood__data_label" htmlFor="">
            Number :{" "}
          </label>{" "}
          {bloodData.number}
        </h3>
      </div>

      <button className="blood__data_btn" onClick={deleteData}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Blood;
