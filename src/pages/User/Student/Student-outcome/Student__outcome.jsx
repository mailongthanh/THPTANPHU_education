import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import Header from "../../../../components/Header/header";
import Outcome from "../../../../components/Outcome/outcome";
import Footer from "../../../../components/Footer/footer";

const Student__outcome = (props) => {
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
    <div className="Student__outcome">
      <Header></Header>
      {student && (
        <Container className="mt-5 mb-5">
          <h4 className="text-success mb-3 text-uppercase">
            Bảng điểm học sinh
          </h4>
          <Outcome data={student[0].studentResult}></Outcome>
        </Container>
      )}
      {student && <Footer></Footer>}
    </div>
  );
};

export default Student__outcome;
