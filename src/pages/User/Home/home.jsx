import React from "react";

import "./home.scss";
import Header from "../../../components/Header/header";
import Slider from "../../../components/Slider/slider";
import CardContainer from "../../../components/Card/card";
import Footer from "../../../components/Footer/footer";
import Login_form from "../../../components/Login_form/login_form";

import { Container, Row, Col } from "react-bootstrap";
import { SolutionOutlined } from "@ant-design/icons";

function Home(props) {
  const important__news = [
    {
      id: "1",
      img: "http://thptanphu.edu.vn/publish/thumbnail/100223/480x320xdefault/upload/100223/20220713/ThongBao_e87af_8c9fc.png",
      title:
        "Công khai chất lượng giáo dục, chất lượng đội ngũ nhà trường các năm học 2021-2022 và 2022-2023",
      date: "1/1/2023",
    },
    {
      id: "2",
      img: "http://thptanphu.edu.vn/publish/thumbnail/100223/480x320xdefault/upload/100223/20221019/Anh_Cong_Khai_c6c6c.png",
      title: "DANH MỤC SÁCH GIÁO KHOA LỚP 10",
      date: "1/2/2023",
    },
    {
      id: "3",
      img: "http://thptanphu.edu.vn/publish/thumbnail/100223/480x320xdefault/upload/100223/20221019/Anh_Cong_Khai_c6c6c.png",
      title:
        "THÔNG BÁO-Kết quả tuyển sinh vào lớp 10 THPT và việc thực hiện hồ sơ nhập học, Năm học 2022 - 2023",
      date: "1/2/2023",
    },
    {
      id: "4",
      img: "http://thptanphu.edu.vn/publish/thumbnail/100223/480x320xdefault/upload/100223/20220407/ts10_631ebae8e7.png",
      title:
        "Thông tin tuyển sinh vào lớp 10 THPT năm học 2022-2023 trường THPT An Phú.",
      date: "1/2/2023",
    },
    {
      id: "5",
      img: "http://thptanphu.edu.vn/publish/thumbnail/100223/480x320xdefault/upload/100223/20221019/Anh_Cong_Khai_c6c6c.png",
      title:
        "Kế Hoạch: Xây dựng phương án dạy học chủ động ứng phó với dịch bện covid-19",
      date: "1/2/2023",
    },
  ];

  const general__news = [
    {
      id: 1,
      content: "Công Khai Dự Toán 2021",
      link: "",
      dateTime: "12/1/2023",
    },
    {
      id: 2,
      content: "Thông Báo Kết Quả Trúng Tuyển Nhân Viên Bảo Vệ",
      link: "",
      dateTime: "1/1/2023",
    },
    {
      id: 3,
      content:
        "Thông báo: V/v xây dựng phương án dạy và học ứng phó với dịch bệnh covid-19 đầu năm 2021-2022",
      link: "",
      dateTime: "1/1/2023",
    },
    {
      id: 4,
      content: "Quyết định điều chỉnh, bổ sung dự toán 2021",
      link: "",
      dateTime: "1/1/2023",
    },
    {
      id: 5,
      content: "Công Khai Dự Toán 2021",
      link: "",
      dateTime: "12/1/2023",
    },
    {
      id: 6,
      content: "Thông Báo Kết Quả Trúng Tuyển Nhân Viên Bảo Vệ",
      link: "",
      dateTime: "1/1/2023",
    },
    {
      id: 7,
      content:
        "Thông báo: V/v xây dựng phương án dạy và học ứng phó với dịch bệnh covid-19 đầu năm 2021-2022",
      link: "",
      dateTime: "1/1/2023",
    },
    {
      id: 8,
      content: "Quyết định điều chỉnh, bổ sung dự toán 2021",
      link: "",
      dateTime: "1/1/2023",
    },
    {
      id: 9,
      content: "Quyết định điều chỉnh, bổ sung dự toán 2021",
      link: "",
      dateTime: "1/1/2023",
    },
  ];

  const events__news = [
    {
      id: 1,
      content: "Chính sách chất lượng năm học 2022-2023",
      link: "",
      dateTime: "12/1/2023",
    },
    {
      id: 2,
      content: "Mục tiêu chất lượng năm học 2022-2023",
      link: "",
      dateTime: "1/1/2023",
    },
    {
      id: 3,
      content: "Kế hoạch đêm văn nghệ gây quỹ 2022 - 2023",
      link: "",
      dateTime: "1/1/2023",
    },
    {
      id: 4,
      content: "Workshop tuyển sinh đại học",
      link: "",
      dateTime: "1/1/2023",
    },
  ];

  const subject__news = [
    {
      id: 1,
      content: "Thời khóa biểu số 4B/TKB-THPTAP áp dụng kể từ ngày 25/01/2021.",
      link: "",
      dateTime: "12/1/2023",
    },
    {
      id: 2,
      content: "Thời khóa biểu số 02/TKB-THPTAP áp dụng kể từ ngày 02/11/2020.",
      link: "",
      dateTime: "1/1/2023",
    },
    {
      id: 3,
      content:
        " Thời khóa biểu số 01c/TKB-THPTAP áp dụng kể từ ngày 12/10/2020.",
      link: "",
      dateTime: "1/1/2023",
    },
    {
      id: 4,
      content:
        "Thời khóa biểu số 01a/TKB-THPTAP áp dụng kể từ ngày 21/09/2020.",
      link: "",
      dateTime: "1/1/2023",
    },
  ];

  const Vocational_guidance__news = [
    {
      id: 1,
      content: "TUYỂN SINH - HƯỚNG NGHIỆP.",
      link: "",
      dateTime: "12/1/2023",
    },
    {
      id: 2,
      content: "Quyết định thành lập Tổ tuyển sinh 10, năm học 2022 - 2023",
      link: "",
      dateTime: "12/1/2023",
    },
  ];

  const OutofHours__news = [
    {
      id: 1,
      content: "Chính sách chất lượng năm học 2022-2023",
      link: "",
      dateTime: "12/1/2023",
    },
    {
      id: 2,
      content:
        "Tài liệu tuyên truyền Phòng ngừa thuốc lá mới cho học sinh THPT",
      link: "",
      dateTime: "12/1/2023",
    },
  ];

  const Group__news = [
    {
      id: 1,
      content:
        "Tuyên truyền, phổ biến các luật mới được thông qua tại Kỳ họp thứ 9, Quốc hội khóa XIV",
      link: "",
      dateTime: "12/1/2023",
    },
    {
      id: 2,
      content: " TIÊU CHÍ CHẤM ĐIỂM THI ĐUA TUẦN - năm học 2020-2021",
      link: "",
      dateTime: "12/1/2023",
    },
  ];

  const Infrastructure__news = [
    {
      id: 1,
      content:
        'Giấy chứng nhận đạt "Đơn vị điển hình tiên tiến trong phong trào toàn dân tham gia Phòng cháy chữa cháy" năm 2020.',
      link: "",
      dateTime: "12/1/2023",
    },
    {
      id: 2,
      content: "Kế hoạch kiểm kê tài sản 0 giờ ngày 01/01/2020",
      link: "",
      dateTime: "12/1/2023",
    },
    {
      id: 3,
      content: "Quyết định kiểm kê tài sản 0 giờ ngày 01/01/2020",
      link: "",
      dateTime: "12/1/2023",
    },
  ];

  const dateTime = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "/" + mm + "/" + yyyy;

    return formattedToday;
  };

  let currentDate = dateTime().toString();

  return (
    <div className="Home">
      <div className="Home__wrapper">
        <Header></Header>
        <div id="Home__body" className="bg-light">
          {/*Thanh chào mừng */}
          <div id="Home__welcome" className="border-bottom pb-2">
            <Container>
              <Row>
                <Row>
                  <Col className="d-sm-none d-md-flex flex-row p-1" md={2}>
                    <span>{currentDate.toString()} | </span>
                  </Col>
                  <Col className="d-flex flex-row p-1">
                    <marquee
                      width="100%"
                      direction="left"
                      className="text-primary"
                    >
                      Chào mừng bạn đã đến với trang cổng thông tin điện tử
                      trường THPT An Phú.
                    </marquee>
                  </Col>
                </Row>
              </Row>
            </Container>
          </div>

          <Row>
            <Col className="col-4">
              <Container>
                <Login_form></Login_form>
              </Container>
            </Col>
            <Col className="col-8 d-flex align-items-center">
              <Container>
                <h1 className="text-uppercase text-primary ">
                  Trường thpt An Phú
                </h1>
              </Container>
            </Col>
          </Row>

          {/*Thanh tin mới */}
          <div id="Home__news-important">
            <Container>
              <Row className="p-3">
                <Col className="col-4" style={{ textAlign: "left" }}>
                  <h6 className="text-primary d-flex align-items-center">
                    <SolutionOutlined className="p-1" /> TIN NỔI BẬT <hr />
                  </h6>
                  <Slider items={important__news}></Slider>
                </Col>
                <Col className="col-8">
                  <CardContainer
                    title="THÔNG BÁO CHUNG"
                    content={general__news}
                  ></CardContainer>
                </Col>
              </Row>
            </Container>
          </div>

          {/*Thanh sự kiện - chuyên môn */}
          <div id="Home__news-event-subject">
            <Container>
              <Row className="p-3">
                <Col className="col-6">
                  <CardContainer
                    title="THÔNG TIN SỰ KIỆN"
                    content={events__news}
                  ></CardContainer>
                </Col>
                <Col className="col-6">
                  <CardContainer
                    title="CHUYÊN MÔN"
                    content={subject__news}
                  ></CardContainer>
                </Col>
              </Row>
            </Container>
          </div>

          {/*Thanh ngoài giờ - hướng nghiệp */}
          <div id="Home__news-OutofHours-Vocational_guidance">
            <Container>
              <Row className="p-3">
                <Col className="col-6">
                  <CardContainer
                    title="NGOÀI GIỜ"
                    content={OutofHours__news}
                  ></CardContainer>
                </Col>
                <Col className="col-6">
                  <CardContainer
                    title="HƯỚNG NGHIỆP - TUYỂN SINH"
                    content={Vocational_guidance__news}
                  ></CardContainer>
                </Col>
              </Row>
            </Container>
          </div>

          {/*Thanh đoàn thể - cơ sở hạ tầng */}
          <div id="Home__news-Group-Infrastructure">
            <Container>
              <Row className="p-3">
                <Col className="col-6">
                  <CardContainer
                    title="ĐOÀN THỂ"
                    content={Group__news}
                  ></CardContainer>
                </Col>
                <Col className="col-6">
                  <CardContainer
                    title="CƠ SỞ HẠ TẦNG - THIẾT BỊ"
                    content={Vocational_guidance__news}
                  ></CardContainer>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
