import React from 'react'
import firebase from 'firebase';
 import DeleteIcon from '@material-ui/icons/Delete';
import '../styles/Blood.css';
import Switch from '@material-ui/core/Switch';
//import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormControl from '@material-ui/core/FormControl';

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

            {/* <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Available"
          labelPlacement="start"
        /> */}

        <button onClick = {deleteData}><DeleteIcon /></button>
        </div>

    )
}

export default Blood
