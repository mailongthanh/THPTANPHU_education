import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./header.scss";
import banner_THPTAP from "../../assets/banner_THPTAnPhu.png";
import { HomeOutlined } from "@ant-design/icons";

function Header(props) {
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
                  <NavDropdown title="Giới thiệu" id="basic-nav-dropdown">
                    <NavDropdown.Item>Đảng Ủy</NavDropdown.Item>
                    <NavDropdown.Item>Ban giám hiệu</NavDropdown.Item>
                    <NavDropdown.Item>Công đoàn cơ sở</NavDropdown.Item>
                    <NavDropdown.Item>Tổ văn phòng</NavDropdown.Item>
                    <NavDropdown.Item>Tổ chuyên môn</NavDropdown.Item>
                    <NavDropdown.Item>Đoàn thanh niên</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Tin tức - Sự kiện"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Hoạt động - Sự kiện
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Thi và tuyển sinh
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Hoạt động đoàn thể
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Nhà trường và xã hội
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">
                      Hoạt động ngoài giờ lên lớp
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">
                      Thông báo từ Sở
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>Kế hoạch năm</Nav.Link>
                  <NavDropdown title="Sinh hoạt chuyên môn">
                    <NavDropdown.Item>Tổ Toán</NavDropdown.Item>
                    <NavDropdown.Item>Tổ Lý</NavDropdown.Item>
                    <NavDropdown.Item>Tổ Hóa</NavDropdown.Item>
                    <NavDropdown.Item>Tổ Sử</NavDropdown.Item>
                    <NavDropdown.Item>Tổ Địa Lý</NavDropdown.Item>
                    <NavDropdown.Item>Tổ Văn</NavDropdown.Item>
                    <NavDropdown.Item>Tổ Anh</NavDropdown.Item>
                    <NavDropdown.Item>Tổ Sinh</NavDropdown.Item>
                  </NavDropdown>
                  {/* <NavDropdown title="Học sinh" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/StudentInfoDetails">
                      Thông tin cá nhân
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/StudentSchedule">
                      Lịch TKB
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/StudentOutcome">
                      Kết quả học tập
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://thptanphu-video-call.netlify.app/">
                      Liên hệ
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  {/* <NavDropdown title="Giáo viên" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/StudentInfoDetails">
                      Thông tin cá nhân
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/TeacherSchedule">
                      Lịch giảng dạy
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://thptanphu-video-call.netlify.app/">
                      Liên hệ
                    </NavDropdown.Item>
                  </NavDropdown> */}
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
