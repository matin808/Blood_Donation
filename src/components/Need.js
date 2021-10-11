import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "../styles/Need.css";

function Need() {
  const [NeedbloodList, setNeedBloodList] = useState();
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    const bloodRef = firebase.database().ref("BloodData");
    bloodRef.on("value", (snapshot) => {
      const reports = snapshot.val();
      const NeedbloodList = [];
      for (let id in reports) {
        NeedbloodList.push({ id, ...reports[id] });
      }
      console.log(NeedbloodList);
      setNeedBloodList(NeedbloodList);
    });
  }, []);

  const handleSearchInput = (e) => {
    setsearchTerm(e.target.value);
  };

  return (
    <div className = "needBlood">
      <h1 className = "need__heading">Need Blood</h1>
      <h5 className = "needBlood__subheading">
        Enter Location :
        <input className = "needBlood__search"
          type="text"
          // placeholder="city, State pin code"
          onChange={handleSearchInput}
        />{" "}
      </h5>
      <div className="needBlood_section">
        {NeedbloodList
          ? NeedbloodList.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.location.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((bg) => (
              <div className="needBlood_section2">
                <h3 className = "needBlood__heading"><label className = "need_label" htmlFor="">Name : </label> {bg.name}</h3>
                <h3 className = "needBlood__heading"><label className = "need_label" htmlFor="">Blood Group : </label> {bg.bloodGroup}</h3>
                <h3 className = "needBlood__heading"><label className = "need_label" htmlFor="">Location : </label> {bg.location}</h3>
                <h3 className = "needBlood__heading"><label className = "need_label" htmlFor="">Number : </label> {bg.number}</h3>              
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default Need;
