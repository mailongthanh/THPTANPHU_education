import React, { useState, useEffect } from "react";
import Header from "../../../../components/Header/header";
import Footer from "../../../../components/Footer/footer";

import { Container } from "react-bootstrap";
import Teaching_schedule from "../../../../components/Teaching_table/teaching_table";

const Teacher__schedule = (props) => {
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const fetchTeacher = async () => {
      const res = await fetch("http://localhost:3500/teacher");
      const data = await res.json();
      setTeacher(data);
    };

    console.log(fetchTeacher());
  }, []);

  return (
    <div className="Student__schedule">
      <Header></Header>
      <h4 className="mt-5 text-uppercase text-success">
        Lịch giảng dạy kỳ 1 năm học 2023 - 2024
      </h4>
      {teacher && (
        <Container className="mt-3 mb-5">
          <Teaching_schedule
            data={teacher[0].teacher__schedule_data}
          ></Teaching_schedule>
        </Container>
      )}
      {teacher && <Footer></Footer>}
    </div>
  );
};

export default Teacher__schedule;
