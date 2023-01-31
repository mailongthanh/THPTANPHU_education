import React from "react";
import { Container } from "react-bootstrap";

import Header from "../../../../components/Header/header";
import Outcome from "../../../../components/Outcome/outcome";
import Footer from "../../../../components/Footer/footer";

const Student__outcome = (props) => {
  const studentResult = [
    {
      subject: "Toán",
      oral_score: [10, 8],
      fifteenminute_score: [10, 8, 9],
      onehour_score: [10, 8],
      midSem_score: 8,
      finalsem_score: 9,
    },
    {
      subject: "Ngữ văn",
      oral_score: [10, 8],
      fifteenminute_score: [10, 8, 9],
      onehour_score: [10, 8],
      midSem_score: 8,
      finalsem_score: 9,
    },
    {
      subject: "Vật lý",
      oral_score: [10, 8],
      fifteenminute_score: [10, 8, 9],
      onehour_score: [10, 8],
      midSem_score: 8,
      finalsem_score: 9,
    },
    {
      subject: "Hóa học",
      oral_score: [10, 8],
      fifteenminute_score: [10, 8, 9],
      onehour_score: [10, 8],
      midSem_score: 8,
      finalsem_score: 9,
    },
    {
      subject: "Lịch sử",
      oral_score: [10, 8],
      fifteenminute_score: [10, 8, 9],
      onehour_score: [10, 8],
      midSem_score: 8,
      finalsem_score: 9,
    },
    {
      subject: "Địa lí",
      oral_score: [10, 8],
      fifteenminute_score: [10, 8, 9],
      onehour_score: [10, 8],
      midSem_score: 8,
      finalsem_score: 9,
    },
    {
      subject: "Sinh học",
      oral_score: [10, 8],
      fifteenminute_score: [10, 8, 9],
      onehour_score: [10, 8],
      midSem_score: 8,
      finalsem_score: 9,
    },
    {
      subject: "Tiếng Anh",
      oral_score: [10, 8],
      fifteenminute_score: [10, 8, 9],
      onehour_score: [10, 8],
      midSem_score: 8,
      finalsem_score: 9,
    },
    {
      subject: "GDCD",
      oral_score: [10, 8],
      fifteenminute_score: [10, 8, 9],
      onehour_score: [10, 8],
      midSem_score: 8,
      finalsem_score: 9,
    },
    {
      subject: "Công nghệ",
      oral_score: [10, 8],
      fifteenminute_score: [10, 8, 9],
      onehour_score: [10, 8],
      midSem_score: 8,
      finalsem_score: 9,
    },
    {
      subject: "GDQP",
      oral_score: [10, 8],
      fifteenminute_score: [10, 8, 9],
      onehour_score: [10, 8],
      midSem_score: 8,
      finalsem_score: 9,
    },
    {
      subject: "GDTC",
      oral_score: [10, 8],
      fifteenminute_score: [10, 8, 9],
      onehour_score: [10, 8],
      midSem_score: 8,
      finalsem_score: 9,
    },
    {
      subject: "Tin học",
      oral_score: [10, 8],
      fifteenminute_score: [10, 8, 9],
      onehour_score: [10, 8],
      midSem_score: 8,
      finalsem_score: 9,
    },
  ];
  return (
    <div className="Student__outcome">
      <Header></Header>
      <Container className="mt-5 mb-5">
        <h4 className="text-success mb-3 text-uppercase">Bảng điểm học sinh</h4>
        <Outcome data={studentResult}></Outcome>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Student__outcome;
