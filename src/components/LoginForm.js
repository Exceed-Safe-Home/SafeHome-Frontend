import React from "react";
import "./LoginForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import Axios from "axios";

const LoginForm = () => {
  const [details, setDetails] = React.useState({ username: "", password: "" });
  const navigate = useNavigate();

  let interval_id = window.setInterval(() => {}, 99999);
  for (let i = 0; i < interval_id; i++) window.clearInterval(i);

  React.useEffect(() => {
    if (localStorage.getItem("myToken")) {
      navigate("/main");
    }
  });

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    console.log(details);

    const response = await fetch(
      "https://ecourse.cpe.ku.ac.th/exceed07/api/token",
      {
        method: "POST",
        body: qs.stringify(details),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      }
    );
    let token = await response.json();
    console.log(token);
    if (token.detail) {
      navigate("/login=fail");
    } else if (token.access_token) {
      localStorage.setItem("currentUser", details.username);
      localStorage.setItem("myToken", token.access_token);
      navigate("/login=success");
    }
  };

  return (
    <div className="login-box">
      <div className="login-form-component">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label class="login-page-label">Enter username</Form.Label>
            <Form.Control
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
              value={details.username}
              type="email"
              placeholder="Username"
            />
            <Form.Text className="text-muted"> </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label class="login-page-label">Password</Form.Label>
            <Form.Control
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button
            id="login-page-submit"
            variant="primary"
            type="submit"
            onClick={handleSubmitClick}
          >
            Submit
          </Button>
        </Form>
        <div class="login-page-register-part">
          <label>Don't have an account?</label>
          <a href="/register"> Register</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
