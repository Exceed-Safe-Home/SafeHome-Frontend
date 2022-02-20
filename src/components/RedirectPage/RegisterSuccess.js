import React from "react";
import "./LoginSuccess.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const RegisterSuccess = () => {
  const navigate = useNavigate();

  let timer;
  clearTimeout(timer);
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setTimeout(() => {
      navigate("/");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="register-success">
      <div className="text-box-success">
        <h1 className="success-text">You've been Registered!</h1>
        <h1 className="success-text">We will redirect you to the login page in a moment</h1>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default RegisterSuccess;
