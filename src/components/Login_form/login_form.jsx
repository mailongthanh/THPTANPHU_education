import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "./login_form.scss";
import { useEffect } from "react";

function Login_form(props) {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  useEffect(() => {}, [getEmail, getPassword]);
  const handleSubmit = () => {
    if (
      email.current.value == "student@gmail.com" &&
      password.current.value == "12345"
    ) {
      localStorage.setItem("emailData", "student@gmail.com");
      localStorage.setItem("passwordData", "12345");
      window.location.reload();
    }

    if (
      email.current.value == "teacher@gmail.com" &&
      password.current.value == "56789"
    ) {
      localStorage.setItem("emailData", "teacher@gmail.com");
      localStorage.setItem("passwordData", "56789");
      window.location.reload();
    }
  };

  return (
    <div>
      {!getEmail && !getPassword && (
        <form required onSubmit={handleSubmit} className="p-3">
          <div className="mr-3">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                ref={email}
              />
              <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Mật khẩu"
                ref={password}
              />
            </Form.Group>
          </div>
          <Button variant="outline-primary" onClick={handleSubmit}>
            Đăng nhập
          </Button>
        </form>
      )}
    </div>
  );
}
export default Login_form;
