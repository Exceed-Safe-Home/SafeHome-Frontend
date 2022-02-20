import React from "react";
import "./RegisterFail.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const RegisterFailed = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <div className="register-fail">
      <div className="text-box-register-fail">
        <h1 className="register-fail-text">Register failed. Username or Serial code has been used.</h1>
        <Button id="login-fail-button" variant="primary" type="submit" size="lg" onClick={handleClick}>
          Back To Register Page
        </Button>
      </div>
    </div>
  );
};

export default RegisterFailed;
