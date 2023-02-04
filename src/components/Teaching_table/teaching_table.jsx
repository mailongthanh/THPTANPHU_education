import React from "react";
import { Fragment } from "react";
import { Table } from "react-bootstrap";

const teaching_table = (props) => {
  const data = props.data;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Thứ 2</th>
          <th>Thứ 3</th>
          <th>Thứ 4</th>
          <th>Thứ 5</th>
          <th>Thứ 6</th>
          <th>Thứ 7</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          let tiet = Object.keys(item);
          return (
            <Fragment>
              <tr>
                <td>{tiet}</td>
                {item[tiet].map((subject) => (
                  <td>{subject}</td>
                ))}
              </tr>
            </Fragment>
          );
        })}
      </tbody>
    </Table>
  );
};

export default teaching_table;
