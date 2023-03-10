import React, { useState, useEffect, Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";

import "./header.scss";
import banner_THPTAP from "../../assets/banner_THPTAnPhu.png";
import { HomeOutlined } from "@ant-design/icons";
import { useRef } from "react";
import { Link } from "react-router-dom";

import Student__information from "../../pages/User/Student/Student-information/Student__information";

function Header(props) {
  const email = useRef();
  const password = useRef();

  const [student, setStudent] = useState();
  const [teacher, setTeacher] = useState();

  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  // const fetchStudentData = () => {
  //   fetch("http://localhost:3500/student")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setStudent(data);
  //     });
  // };

  // const fetchTeacherData = () => {
  //   fetch("http://localhost:3500/teacher")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setTeacher(data);
  //     });
  // };

  const logoutClick = () => {
    localStorage.clear();
    window.location.reload();
    window.open("/#");
  };

  return (
    <div className="Header">
      <div className="Header__wrapper">
        <div className="Header__content">
          <div className="content-banner">
            <img src={banner_THPTAP} alt="" />
          </div>
        </div>
        <div className="Header__navigation">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="/#" className="Header__navigation-icon">
                <HomeOutlined />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="Gi???i thi???u" id="basic-nav-dropdown">
                    <NavDropdown.Item>?????ng ???y</NavDropdown.Item>
                    <NavDropdown.Item>Ban gi??m hi???u</NavDropdown.Item>
                    <NavDropdown.Item>C??ng ??o??n c?? s???</NavDropdown.Item>
                    <NavDropdown.Item>T??? v??n ph??ng</NavDropdown.Item>
                    <NavDropdown.Item>T??? chuy??n m??n</NavDropdown.Item>
                    <NavDropdown.Item>??o??n thanh ni??n</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Tin t???c - S??? ki???n"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Ho???t ?????ng - S??? ki???n
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Thi v?? tuy???n sinh
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Ho???t ?????ng ??o??n th???
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Nh?? tr?????ng v?? x?? h???i
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">
                      Ho???t ?????ng ngo??i gi??? l??n l???p
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">
                      Th??ng b??o t??? S???
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>K??? ho???ch n??m</Nav.Link>
                  <NavDropdown title="Sinh ho???t chuy??n m??n">
                    <NavDropdown.Item>T??? To??n</NavDropdown.Item>
                    <NavDropdown.Item>T??? L??</NavDropdown.Item>
                    <NavDropdown.Item>T??? H??a</NavDropdown.Item>
                    <NavDropdown.Item>T??? S???</NavDropdown.Item>
                    <NavDropdown.Item>T??? ?????a L??</NavDropdown.Item>
                    <NavDropdown.Item>T??? V??n</NavDropdown.Item>
                    <NavDropdown.Item>T??? Anh</NavDropdown.Item>
                    <NavDropdown.Item>T??? Sinh</NavDropdown.Item>
                  </NavDropdown>
                  {getEmail === "student@gmail.com" &&
                    getPassword === "12345" && (
                      <NavDropdown title="H???c sinh" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/StudentInfoDetails">
                          Th??ng tin c?? nh??n
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/StudentSchedule">
                          L???ch TKB
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/StudentOutcome">
                          K???t qu??? h???c t???p
                        </NavDropdown.Item>

                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://thptanphu-video-call.netlify.app/">
                          Li??n h???
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={logoutClick}>
                          <div className="logout_btn">
                            <Link to="/#">????ng xu???t</Link>
                          </div>
                        </NavDropdown.Item>
                      </NavDropdown>
                    )}
                  {getEmail === "teacher@gmail.com" &&
                    getPassword === "56789" && (
                      <NavDropdown title="Gi??o vi??n" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/StudentInfoDetails">
                          Th??ng tin c?? nh??n
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/TeacherSchedule">
                          L???ch gi???ng d???y
                        </NavDropdown.Item>

                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://thptanphu-video-call.netlify.app/">
                          Li??n h???
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={logoutClick}>
                          <div className="logout_btn">
                            <Link to="/#">????ng xu???t</Link>
                          </div>
                        </NavDropdown.Item>
                      </NavDropdown>
                    )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default Header;
