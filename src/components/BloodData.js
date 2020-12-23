import { useState, useEffect } from "react";
import firebase from "./firebase";
import Blood from "./Blood";
import Need from "./Need";

function BloodData() {
  const [bloodList, setBloodList] = useState();

  useEffect(() => {
    const bloodRef = firebase.database().ref("BloodData");
    bloodRef.on("value", (snapshot) => {
      const reports = snapshot.val();
      const bloodList = [];
      for (let id in reports) {
        bloodList.push({ id, ...reports[id] });
      }
      setBloodList(bloodList);
    });
  }, []);

  return (
    <div className="bloodData">
      {bloodList
        ? bloodList.map((bloodData, index) => (
            <Blood bloodData={bloodData} key={index} />
          ))
        : ""}
    </div>
  );
}

export default BloodData;
