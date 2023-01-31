import React from "react";
import { Fragment } from "react";
import { Table } from "react-bootstrap";

const Schedule = (props) => {
  const data = props.data;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Buổi sáng</th>
          <th>Buổi chiều</th>
          <th>Ghi chú</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          let DayofWeek = Object.keys(item);
          return (
            <Fragment>
              <tr>
                <td className="align-middle text-primary">
                  <span className="text-uppercase fw-bolder">{DayofWeek}</span>
                </td>
                <td>
                  {/* Những môn học vào buổi sáng */}
                  {item[DayofWeek].morning.map((subject) =>
                    subject ? (
                      <span className="d-block">{subject}</span>
                    ) : (
                      <br />
                    )
                  )}
                </td>
                <td>
                  {/* Những môn học vào buổi chiều */}
                  {item[DayofWeek].afternoon.map((subject) =>
                    subject ? (
                      <span className="d-block">{subject}</span>
                    ) : (
                      <br />
                    )
                  )}
                </td>
                <td>{item[DayofWeek].note}</td>
              </tr>
            </Fragment>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Schedule;
