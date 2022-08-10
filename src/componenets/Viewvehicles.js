import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import UpdateModel from './UpdateModel';


const Viewvehicles = () => {
    const [vehicles, setVehicle] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [vehicledet, setVehicledet] = useState();

    useEffect(() => {
        const getVehicles = () => {
          axios
            .get("http://localhost:5000/vehicle")
            .then((res) => {
              setVehicle(res.data);
            })
            .catch((err) => {
              alert(err.msg);
            });
        };
        getVehicles();
    });

    const confirmdel = (vehicle) => {
       
            axios
                .delete(`http://localhost:5000/vehicle/${vehicle._id}`)
                .then(() => {
                    alert("Successfully Deleted");
                }).catch((err) => {
                    alert(err)
                })
        
    }

  
    



  return (
    <div>
        <center>
          <h3>Registered Vehicles </h3>
        
        <br />

        <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Vehicle No.</th>
                <th>Vehicle Type</th>
                <th>Fuel Type</th>
                <th>Owner Name</th>
                <th>Registered Year</th>
                <th>Type</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            {vehicles.map((vehicle) => (
              <tbody key={vehicle._id}>
                <tr>
                  <td>{vehicle.vehicleNo}</td>
                  <td>{vehicle.vehicleType}</td>
                  <td>{vehicle.fuelType}</td>
                  <td>{vehicle.ownerName}</td>
                  <td>{vehicle.registeredYear}</td>
                  <td>{vehicle.vehitype}</td>
                  <td>
                    <Button onClick = {() => {setModalShow(true);setVehicledet(vehicle)}}>Update</Button>
                  </td>
                  <td>
                    <Button variant="danger" onClick = {() => {confirmdel(vehicle)}}>Delete</Button>
                  </td>
                  
                </tr>
              </tbody>
            ))}
          </Table>

          </center>

          <UpdateModel
            show={modalShow}
            onHide={() => setModalShow(false)}
            vehicle =  {vehicledet}
          />

    </div>
  )
}

export default Viewvehicles