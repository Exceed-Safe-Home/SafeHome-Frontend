import React from "react";
import "./BackToLogin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const BackToLogin = () => {
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
    <div className="back-to-login">
      <div className="text-box-back-to-login">
        <h1 className="backtologin-text">You've been logged out!</h1>
        <h1 className="backtologin-text">We will redirect you back to the login page in a moment</h1>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default BackToLogin;