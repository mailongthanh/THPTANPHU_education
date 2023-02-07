import React, { useState, useEffect } from "react";
import Header from "../../../../components/Header/header";
import Footer from "../../../../components/Footer/footer";
import Schedule from "../../../../components/Schedule/schedule";
import { Container } from "react-bootstrap";

const Student__schedule = (props) => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const res = await fetch("http://localhost:3500/student");
      const data = await res.json();
      setStudent(data);
    };

    console.log(fetchStudent());
  }, []);

  return (
    <div className="Student__schedule">
      <Header></Header>
      <h4 className="mt-5 text-uppercase text-success">
        Thời khóa biểu học kỳ 1 năm học 2023 - 2024
      </h4>
      {student && (
        <Container className="mt-3 mb-5">
          <Schedule data={student[0].student__schedule_data}></Schedule>
        </Container>
      )}
      {student && <Footer></Footer>}
    </div>
  );
};

export default Student__schedule;
