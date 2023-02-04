import React from "react";
import Header from "../../../../components/Header/header";
import Footer from "../../../../components/Footer/footer";

import { Container } from "react-bootstrap";
import Teaching_schedule from "../../../../components/Teaching_table/teaching_table";

const Teacher__schedule = (props) => {
  const teacher__schedule_data = [
    { "Tiết 1": ["10A2", "", "10A1", "", "", "10A3"] },
    { "Tiết 2": ["10A2", "10A2", "10A1", "", "10A2", ""] },
    { "Tiết 3": ["", "", "", "", "", ""] },
    { "Tiết 4": ["", "", "10A3", "", "", "10A2"] },
    { "Tiết 5": ["10A1", "", "10A3", "", "", ""] },
    { "Tiết 6": ["", "", "10A4", "", "", ""] },
    { "Tiết 7": ["", "", "10A4", "", "", "10A9"] },
    { "Tiết 8": ["", "", "", "", "", ""] },
    { "Tiết 9": ["10A9", "", "", "", "", ""] },
    { "Tiết 10": ["10A9", "", "", "", "", ""] },
  ];

  return (
    <div className="Student__schedule">
      <Header></Header>
      <h4 className="mt-5 text-uppercase text-success">
        Lịch giảng dạy kỳ 1 năm học 2023 - 2024
      </h4>
      <Container className="mt-3 mb-5">
        <Teaching_schedule data={teacher__schedule_data}></Teaching_schedule>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Teacher__schedule;
