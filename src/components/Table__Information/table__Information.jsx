import React from "react";
import { Fragment } from "react";
import { Table } from "react-bootstrap";

const Table_Information = (props) => {
  const Student_key = props.Student_key;
  const Student_value = Object.values(props.Student_value);
  return (
    <Table striped bordered hover size="sm">
      <tbody>
        {Student_value.map((item, index) => {
          return (
            <Fragment>
              <tr>
                <td>{Student_key[index]}</td>
                <td>
                  <b className="fs-8">{item}</b>
                </td>
              </tr>
            </Fragment>
          );
        })}
      </tbody>

      {/* <tbody>
        <tr>
          <td>Ngày sinh</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Giới tính</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>Trường</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>Lớp</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>Quốc gia</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>Dân tộc</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>Tôn giáo</td>
          <td>@twitter</td>
        </tr>
      </tbody> */}
    </Table>
  );
};

export default Table_Information;
