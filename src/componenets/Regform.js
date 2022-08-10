import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Regform = () => {
  const [validated, setvalidated] = useState(false);
  const [vno, setVehicleNo] = useState();
  const [vtype, setVehicleType] = useState();
  const [ftype, setFuelType] = useState();
  const [oname, setOwnerName] = useState();
  const [year, setYear] = useState();

  const [type, setVtype] = useState();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const newVehicle = {
      vehicleNo: vno,
      vehicleType: vtype,
      fuelType: ftype,
      ownerName: oname,
      registeredYear: year,
      vehitype: type,
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .post("http://localhost:5000/vehicle", newVehicle)
        .then(() => alert("Success"), navigate("/viewvehicles"))
        .catch((err) => alert(err));
    }
    setvalidated(true);
  };

  const checkValidity = () => {
    if (vno.match("^([a-zA-Z]{2,3}|((?!0*-)[0-9]{2,3}))-[0-9]{4}(?<!0{4})$")) {
      alert("True");
      console.log(true);
    } else {
      alert("False");
      console.log(false);
    }
  };

  const checkType = () => {
    if (vno.match("^([0-9]{2,3})-[0-9]{4}(?<!0{4})$")) {
      setVtype("Old");
    } else if (vno.match("^([a-zA-Z]{2,3})-[0-9]{4}(?<!0{4})$")) {
      setVtype("Modern");
    } else if (vno.match("^([0-9]{1,2})ශ්‍රී[0-9]{4}(?<!0{4})$")) {
      setVtype("Vintage");
    }
  };

  return (
    <div>
      <div>
        <center>
          <h3>Register Your Vehicle</h3>
          <fieldset>
            <form noValidate validated={validated} onSubmit={handleSubmit}>
              <br />
              <br />
              <input
                type="text"
                placeholder="Vehicle No"
                value={vno}
                onChange={(e) => setVehicleNo(e.target.value)}
                required
              />
              &nbsp;&nbsp;
              <Button variant="outline-success" onClick={checkValidity}>
                Verify
              </Button>
              <br />
              <br />
              <label for="vtype">Choose a Vehicle Type:</label>
              <br />
              <select
                name="vtype"
                id="vtype"
                value={vtype}
                onChange={(e) => setVehicleType(e.target.value)}
                required
              >
                <option selected disabled hidden>
                  Select
                </option>

                <option>Car</option>
                <option>Van</option>
                <option>Bus</option>
                <option>Lorry</option>
                <option>Motor Bike</option>
              </select>
              <br />
              <br />
              <label for="ftype">Choose a Fuel Type:</label>
              <br />
              <select
                name="ftype"
                id="ftype"
                value={ftype}
                onChange={(e) => setFuelType(e.target.value)}
                required
              >
                <option selected disabled hidden>
                  Select
                </option>

                <option>Petrol</option>
                <option>Diesel</option>
                <option>Hybrid</option>
                <option>Electric</option>
                <option>Gas</option>
              </select>
              <br />
              <br />
              <input
                type="text"
                placeholder="Owner Name"
                value={oname}
                onChange={(e) => setOwnerName(e.target.value)}
                required
              />
              <br />
              <br />
              <label for="Year">Choose Registered Year:</label>
              <br />
              <input
                type="number"
                value={year}
                min="1990"
                max="2022"
                onChange={(e) => setYear(e.target.value)}
                required
              />
              <br />
              <br />
              <Button variant="success" type="submit" onClick={checkType}>
                Submit
              </Button>
            </form>
          </fieldset>
        </center>
      </div>
    </div>
  );
};

export default Regform;
