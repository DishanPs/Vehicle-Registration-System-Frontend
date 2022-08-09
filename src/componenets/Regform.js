import React from "react";
import { useState } from 'react'
import axios from "axios";
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';



const Regform = () => {

    const [validated, setvalidated] = useState(false)
    const [vno, setVehicleNo] = useState();
    const [vtype, setVehicleType] = useState();
    const [ftype, setFuelType] = useState();
    const [oname, setOwnerName] = useState();
    const [year, setYear] = useState();

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        const newVehicle = {
            "vehicleNo" : vno,
            "vehicleType" : vtype,
            "fuelType" : ftype,
            "ownerName" : oname,
            "registeredYear" : year,
        };

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else {
            axios
                .post("http://localhost:5000/vehicle", newVehicle)
                .then(() => alert("Success"),
                            navigate("/viewvehicles"))
                .catch((err) => alert(err));
                console.log(newVehicle);
        }
        setvalidated(true);
      };



  return (
    <div>
        <div>
            <center>
            <h3>Register Your Vehicle</h3>
                <fieldset>
                <form noValidate validated={validated}>

                    <br /><br />
                    <input 
                        type = "text" 
                        placeholder="Vehicle No" 
                        value={vno}
                        onChange={(e) => setVehicleNo(e.target.value)}
                        required
                    />

                    <br /><br />

                    <label for="vtype">Choose a Vehicle Type:</label>
                    <br />
                    <select 
                        name="vtype" 
                        id="vtype"
                        value={vtype}
                        onChange={(e) => setVehicleType(e.target.value)}
                        required 
                    >
                        <option selected disabled hidden>Select</option>

                            <option>Car</option>
                            <option>Van</option>
                            <option>Bus</option>
                            <option>Lorry</option>
                            <option>Motor Bike</option>
                    </select>

                    <br /><br />

                    <label for="ftype">Choose a Fuel Type:</label>
                    <br />
                    <select 
                        name="ftype" 
                        id="ftype"
                        value={ftype}
                        onChange={(e) => setFuelType(e.target.value)}
                        required 
                    >
                        <option selected disabled hidden>Select</option>

                            <option>Petrol</option>
                            <option>Diesel</option>
                            <option>Hybrid</option>
                            <option>Electric</option>
                            <option>Gas</option>
                    </select>

                    <br /><br />

                    <input 
                        type = "text" 
                        placeholder="Owner Name" 
                        value={oname}
                        onChange={(e) => setOwnerName(e.target.value)}
                        required
                    />

                    <br /><br />

                    <label for="Year">Choose Registered Year:</label>
                    <br />

                    <input 
                        type = "number" 
                        value={year}
                        min = "1990"
                        max = "2022"
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />

                    <br /><br />

                    <Button variant="success" type ="submit" onClick={handleSubmit}>Submit</Button>


                </form>
                </fieldset>
            </center>
        </div>

    </div>
  )
}

export default Regform