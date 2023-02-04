import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "./login_form.scss";

function Login_form(props) {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    if (
      email.current.value == "abc@gmail.com" &&
      password.current.value == "12345"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "12345");
    }
  };

  return (
    <div>
      {getEmail && getPassword ? (
        console.log("here")
      ) : (
        <form required onSubmit={handleSubmit} className="p-3">
          <div className="mr-3">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Mật khẩu" />
            </Form.Group>
          </div>
          <Button variant="outline-primary">Đăng nhập</Button>
        </form>
      )}
    </div>
  );
}
export default Login_form;
