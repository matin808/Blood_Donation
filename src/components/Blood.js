import React from 'react'
import firebase from 'firebase';

function Blood({bloodData}) {

    const deleteData = () => {
        const bloodRef = firebase.database().ref("BloodData").child(bloodData.id);
        bloodRef.remove();
    }
    return (
        <div className = "blood">
            <h3>{bloodData.name}</h3>
            <h3>{bloodData.bloodGroup}</h3>
            <h3>{bloodData.location}</h3>
            <h3>{bloodData.number}</h3>

        <button onClick = {deleteData}>Delete</button>
        </div>
    )
}

export default Blood
