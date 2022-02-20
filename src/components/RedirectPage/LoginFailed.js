import React from "react";
import "./LoginFailed.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const LoginFailed = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="login-fail">
      <div className="text-box-fail">
        <h1 className="fail-text">Oops, looks like your your username</h1>
        <h1 className="fail-text">or your password is incorrect!</h1>
        <Button id="login-fail-button" variant="primary" type="submit" size="lg" onClick={handleClick}>
          Back To Login Page
        </Button>
      </div>
    </div>
  );
};

export default LoginFailed;
