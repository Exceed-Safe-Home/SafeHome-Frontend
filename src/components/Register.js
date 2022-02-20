import React from "react";
import "./Register.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate} from "react-router-dom"


const Register = () => {

  const navigate = useNavigate()
  React.useEffect(() => {
    if (localStorage.getItem("myToken")) {
      navigate("/main");
    }
  });

  const [registerDetails,setRegisterDetails] = React.useState({
    username:"",
    password:"",
    serial:"",
    name:"",
    surname:"",
    telephone:"",
    house_no:"",
    village_no:"",
    lane:"",
    road:"",
    sub_district:"",
    district:"",
    province:"",
    postal_code:""})

  const onSubmitButtonClick = async (e) => {
    e.preventDefault()
    console.log("clicked")
    console.log(registerDetails)
    let response = await fetch("https://ecourse.cpe.ku.ac.th/exceed07/api/register",{
      method: 'POST',
      body: JSON.stringify(registerDetails),
      headers:{
          "Content-Type": "application/JSON;charset=UTF-8"
      }
    })
    response = await response.json()
    console.log(response)
    if(response.detail === "User has been register"){
      navigate("/register=success")
    }
    else{
      navigate("/register=fail")
    }
  }

  return (
    <div className = "register-username-box">
      <div className = "register-page-back-to-login">
        <label>Already have an account?</label>
        <a href ="/">Back to login</a>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label class="login-page-label">Username</Form.Label>
          <Form.Control placeholder="Username" 
          onChange ={e => setRegisterDetails({...registerDetails, username: e.target.value})} 
          value = {{registerDetails}.username}/>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label class="login-page-label">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
          onChange ={e => setRegisterDetails({...registerDetails, password: e.target.value})}
          value = {{registerDetails}.password}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSerial">
          <Form.Label class="login-page-label">Serial Number</Form.Label>
          <Form.Control placeholder="Serial Number" 
          onChange ={e => setRegisterDetails({...registerDetails, serial: e.target.value})}
          value = {{registerDetails}.serial}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label class="login-page-label">Name</Form.Label>
          <Form.Control placeholder="Name" 
          onChange ={e => setRegisterDetails({...registerDetails, name: e.target.value})}
          value = {{registerDetails}.name}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSurname">
          <Form.Label class="login-page-label">Surname</Form.Label>
          <Form.Control placeholder="Surname" 
          onChange ={e => setRegisterDetails({...registerDetails, surname: e.target.value})}
          value = {{registerDetails}.surname}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTelephone">
          <Form.Label class="login-page-label">Telephone</Form.Label>
          <Form.Control placeholder="Telephone" 
          onChange ={e => setRegisterDetails({...registerDetails, telephone: e.target.value})}
          value = {{registerDetails}.telephone}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formHouseNumber">
          <Form.Label class="login-page-label">House Number</Form.Label>
          <Form.Control placeholder="House Number" 
          onChange ={e => setRegisterDetails({...registerDetails, house_no: e.target.value})}
          value = {{registerDetails}.house_no}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formVillage">
          <Form.Label class="login-page-label">Village</Form.Label>
          <Form.Control placeholder="Village" 
          onChange ={e => setRegisterDetails({...registerDetails, village_no: e.target.value})}
          value = {{registerDetails}.village_no}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLane">
          <Form.Label class="login-page-label">Lane</Form.Label>
          <Form.Control placeholder="Lane" 
          onChange ={e => setRegisterDetails({...registerDetails, lane: e.target.value})}
          value = {{registerDetails}.lane}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRoad">
          <Form.Label class="login-page-label">Road</Form.Label>
          <Form.Control placeholder="Road" 
          onChange ={e => setRegisterDetails({...registerDetails, road: e.target.value})}
          value = {{registerDetails}.road}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSubDistrict">
          <Form.Label class="login-page-label">Sub District</Form.Label>
          <Form.Control placeholder="Sub District" 
          onChange ={e => setRegisterDetails({...registerDetails, sub_district: e.target.value})}
          value = {{registerDetails}.sub_district}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDistrict">
          <Form.Label class="login-page-label">District</Form.Label>
          <Form.Control placeholder="District" 
          onChange ={e => setRegisterDetails({...registerDetails, district: e.target.value})}
          value = {{registerDetails}.district}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProvince">
          <Form.Label class="login-page-label">Province</Form.Label>
          <Form.Control placeholder="Province" 
          onChange ={e => setRegisterDetails({...registerDetails, province: e.target.value})}
          value = {{registerDetails}.province}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPostalCode">
          <Form.Label class="login-page-label">Postal Code</Form.Label>
          <Form.Control placeholder="Postal Code" 
          onChange ={e => setRegisterDetails({...registerDetails, postal_code: e.target.value})}
          value = {{registerDetails}.postal_code}/>
        </Form.Group>
        <div className="register-button-box">
          <Button id="register-button" variant="primary" type="submit" onClick={onSubmitButtonClick}>
            Register
          </Button>
        </div>
        </Form>
    </div>
  );
};

export default Register;
