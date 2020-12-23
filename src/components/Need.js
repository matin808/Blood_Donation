import React, { useEffect, useState } from "react";
import firebase from "firebase";
//import Switch from '@material-ui/core/Switch';
//import FormGroup from '@material-ui/core/FormGroup';
//import FormControlLabel from '@material-ui/core/FormControlLabel';

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
    <div>
      <h1>Need Blood</h1>
      <h5>
        Enter Location :
        <input
          type="text"
          placeholder="Enter Your Location"
          onChange={handleSearchInput}
        />{" "}
      </h5>
      <div className="blood">
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
              <>
                <h3>{bg.name}</h3>
                <h3>{bg.bloodGroup}</h3>
                <h3>{bg.location}</h3>
                <h3>{bg.number}</h3>
                {/* <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Available"
          labelPlacement="start"
        /> */}
              </>
            ))
          : ""}
      </div>
    </div>
  );
}

export default Need;
