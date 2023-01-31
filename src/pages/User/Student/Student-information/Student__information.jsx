import React from "react";
import { Container, Tab, Tabs, Row, Col } from "react-bootstrap";
import Header from "../../../../components/Header/header";
import Table_Information from "../../../../components/Table__Information/table__Information";

import avatar__longthanh from "../../../../assets/Student_avatar/longthanh.png";
const Student__information = (props) => {
  const Student__infor_key = [
    "Ngày sinh",
    "Giới tính",
    "Trường",
    "Lớp",
    "Quốc gia",
    "Dân tộc",
    "Tôn giáo",
  ];
  const Student__infor_value = {
    birth: "07/12/2001",
    gender: "Nam",
    School: "Trường THPT An Phú",
    Class: "12a14",
    Country: "Việt Nam",
    Ethnic: "Kinh",
    Religion: "Không có",
  };

  const Student__insurance_key = [
    "Số BHYT",
    "Ngày cấp BHYT",
    "Giá trị sử dụng từ ngày",
    "Thời hạn đến",
    "Tỉnh/Thành phố",
    "Khám bệnh ban đầu",
  ];

  const Student__insurance_value = {
    insuranceID: "SV4798924482389",
    createDate: "04/09/2018",
    startDate: "01/01/2022",
    endDate: "31/12/2022",
    city: "Hồ Chí Minh",
    Place: "Bệnh viện đa khoa khu vực Thủ Đức",
  };

  const Student__contact_key = [
    "Tỉnh",
    "Quận",
    "Phường",
    "Số nhà/tên đường",
    "Email",
    "Điện thoại",
  ];

  const Student__contact_value = {
    Province: "An Giang",
    District: "Huyện An Phú",
    Ward: "Thị trấn An Phú",
    Housenumber: "93",
    Email: "longthanh71201@gmail.com",
    PhoneNumber: "0369941633",
  };

  const Student__schoolfee_key = [
    "Học phí",
    "Số tiền phải đóng",
    "Số tiền đã đóng",
    "Còn nợ",
    "Thời gian đóng",
    "Tình trạng",
    "Ghi chú",
  ];

  const Student__schoolfee_value = {
    Tuition: "1.500.000",
    MustPay: "1.500.000",
    Paid: "1.500.000",
    Own: "0",
    CloseTime: "5/2/2023",
    Status: "",
    Note: "",
  };

  return (
    <div className="Student__information">
      <Header></Header>
      <Container>
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
                      src={avatar__longthanh}
                      alt=""
                      width="100%"
                      height="100%"
                    />
                  </Col>
                  <Col
                    className="col-9"
                    style={{ textAlign: "left", marginLeft: "20px" }}
                  >
                    <h4 className="text-success">Mai Long Thành</h4>
                    <Table_Information
                      Student_key={Student__infor_key}
                      Student_value={Student__infor_value}
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
                      Student_value={Student__contact_value}
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
                      Student_value={Student__insurance_value}
                    ></Table_Information>
                  </Col>
                </Row>
              </Container>
            </div>
          </Tab>
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
                      Student_value={Student__schoolfee_value}
                    ></Table_Information>
                  </Col>
                </Row>
              </Container>
            </div>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default Student__information;