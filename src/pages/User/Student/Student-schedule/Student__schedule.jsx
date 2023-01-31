import React from "react";
import Header from "../../../../components/Header/header";
import Footer from "../../../../components/Footer/footer";
import Schedule from "../../../../components/Schedule/schedule";
import { Container } from "react-bootstrap";

const Student__schedule = (props) => {
  const student__schedule_data = [
    {
      "Thứ hai": {
        morning: ["Anh", "Anh", "", "Lý"],
        afternoon: ["Anh", "Anh", "Hóa", "Hóa"],
        note: "",
      },
    },
    {
      "Thứ ba": {
        morning: ["Lý", "Lý", "Văn", "Văn"],
        afternoon: ["", "", "Toán", "Toán"],
        note: "",
      },
    },
    {
      "Thứ tư": {
        morning: ["Anh", "Anh", "Văn", "Văn"],
        afternoon: ["", "", "Hóa"],
        note: "",
      },
    },
    {
      "Thứ năm": {
        morning: ["Anh", "Anh", "Văn", "Văn"],
        afternoon: ["Toán", "Toán"],
        note: "",
      },
    },
    {
      "Thứ sáu": { morning: ["Toán", "Toán", "", ""], afternoon: [], note: "" },
    },
    {
      "Thứ bảy": { morning: ["Toán", "Toán", "", ""], afternoon: [], note: "" },
    },
  ];

  return (
    <div className="Student__schedule">
      <Header></Header>
      <h4 className="mt-5 text-uppercase text-success">
        Thời khóa biểu học kỳ 1 năm học 2023 - 2024
      </h4>
      <Container className="mt-3 mb-5">
        <Schedule data={student__schedule_data}></Schedule>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Student__schedule;
