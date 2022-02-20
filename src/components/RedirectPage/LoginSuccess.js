import React from "react";
import "./LoginSuccess.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const LoginSuccess = () => {
  const navigate = useNavigate();

  let timer;
  clearTimeout(timer);
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setTimeout(() => {
      navigate("/main");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="login-success">
      <div className="text-box-success">
        <h1 className="success-text">You've been logged in!</h1>
        <h1 className="success-text">We will redirect you to the main page in a moment</h1>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default LoginSuccess;
