import React, { useState, useEffect } from "react";
import { Container, Tab, Tabs, Row, Col } from "react-bootstrap";
import Header from "../../../../components/Header/header";
import Table_Information from "../../../../components/Table__Information/table__Information";

const Student__information = (props) => {
  const getEmail = localStorage.getItem("emailData");

  const [student, setStudent] = useState(null);
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const fetchTeacher = async () => {
      const res = await fetch("http://localhost:3500/teacher");
      const data = await res.json();
      setTeacher(data);
    };
    const fetchStudent = async () => {
      const res = await fetch("http://localhost:3500/student");
      const data = await res.json();
      setStudent(data);
    };

    console.log(fetchTeacher());
    console.log(fetchStudent());
  }, []);

  const Student__infor_key = [
    "Họ và tên",
    "Chức vụ",
    "Ngày sinh",
    "Giới tính",
    "Trường",
    "Lớp",
    "Quốc gia",
    "Dân tộc",
    "Tôn giáo",
  ];

  const Student__insurance_key = [
    "Số BHYT",
    "Ngày cấp BHYT",
    "Giá trị sử dụng từ ngày",
    "Thời hạn đến",
    "Tỉnh/Thành phố",
    "Khám bệnh ban đầu",
  ];

  const Student__contact_key = [
    "Tỉnh",
    "Quận",
    "Phường",
    "Số nhà/tên đường",
    "Email",
    "Điện thoại",
  ];

  const Student__schoolfee_key = [
    "Học phí",
    "Số tiền phải đóng",
    "Số tiền đã đóng",
    "Còn nợ",
    "Thời gian đóng",
    "Tình trạng",
    "Ghi chú",
  ];

  return (
    <div className="Student__information">
      <Header></Header>
      <Container>
        {student && (
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            style={{
              margin: "16px 16px 0px 16px",
            }}
          >
            <Tab eventKey="profile" title="THÔNG TIN CHUNG">
              <div
                id="Student__information-General"
                style={{
                  margin: "0px 16px 16px 16px",
                  borderLeft: "1px solid #dee2e6",
                  borderRight: "1px solid #dee2e6",
                  borderBottom: "1px solid #dee2e6",
                }}
              >
                <Container>
                  <Row className="p-2">
                    <Col className="col-2 border border-primary p-2">
                      <img
                        src={
                          getEmail === "student@gmail.com"
                            ? student[0].Student_infor_value.img
                            : teacher[0].Teacher__infor_value.img
                        }
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </Col>

                    <Col
                      className="col-9"
                      style={{ textAlign: "left", marginLeft: "20px" }}
                    >
                      <h4 className="text-success">
                        {getEmail === "student@gmail.com"
                          ? student[0].Student_infor_value.name
                          : teacher[0].Teacher__infor_value.name}
                      </h4>
                      <Table_Information
                        Student_key={Student__infor_key}
                        Student_value={
                          getEmail === "student@gmail.com"
                            ? student[0].Student_infor_value
                            : teacher[0].Teacher__infor_value
                        }
                      ></Table_Information>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Tab>
            <Tab eventKey="contact" title="THÔNG TIN LIÊN HỆ">
              <div
                id="Student__information-contact"
                style={{
                  margin: "0px 16px 16px 16px",
                  borderLeft: "1px solid #dee2e6",
                  borderRight: "1px solid #dee2e6",
                  borderBottom: "1px solid #dee2e6",
                }}
              >
                <Container>
                  <Row className="p-2">
                    <Col
                      className="col-12"
                      style={{ textAlign: "left", marginLeft: "20px" }}
                    >
                      <h5 className="mt-3 mb-3 text-uppercase text-success">
                        Thông tin liên hệ
                      </h5>
                      <Table_Information
                        Student_key={Student__contact_key}
                        Student_value={
                          getEmail === "student@gmail.com"
                            ? student[0].Student__contact_value
                            : teacher[0].Teacher__contact_value
                        }
                      ></Table_Information>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Tab>
            <Tab eventKey="insurance" title="THÔNG TIN BẢO HIỂM">
              <div
                id="Student__information-insurance"
                style={{
                  margin: "0px 16px 16px 16px",
                  borderLeft: "1px solid #dee2e6",
                  borderRight: "1px solid #dee2e6",
                  borderBottom: "1px solid #dee2e6",
                }}
              >
                <Container>
                  <Row className="p-2">
                    <Col
                      className="col-12"
                      style={{ textAlign: "left", marginLeft: "20px" }}
                    >
                      <h5 className="mt-3 mb-3 text-uppercase text-success">
                        Thông tin bảo hiểm y tế
                      </h5>
                      <Table_Information
                        Student_key={Student__insurance_key}
                        Student_value={student[0].Student__insurance_value}
                      ></Table_Information>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Tab>
            {getEmail === "student@gmail.com" && (
              <Tab eventKey="Cost" title="THÔNG TIN HỌC PHÍ">
                <div
                  id="Student__information-tuition"
                  style={{
                    margin: "0px 16px 16px 16px",
                    borderLeft: "1px solid #dee2e6",
                    borderRight: "1px solid #dee2e6",
                    borderBottom: "1px solid #dee2e6",
                  }}
                >
                  <Container>
                    <Row className="p-2">
                      <Col
                        className="col-12"
                        style={{ textAlign: "left", marginLeft: "20px" }}
                      >
                        <h5 className="mt-3 mb-3 text-uppercase text-success">
                          Thông tin học phí, năm học 2023 - 2024
                        </h5>
                        <Table_Information
                          Student_key={Student__schoolfee_key}
                          Student_value={student[0].Student__schoolfee_value}
                        ></Table_Information>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Tab>
            )}
          </Tabs>
        )}
      </Container>
    </div>
  );
};

export default Student__information;
