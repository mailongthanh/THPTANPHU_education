import React from "react";

import Table from "react-bootstrap/Table";
import { Fragment } from "react";

const Outcome = (props) => {
  const data = props.data;

  let TBM = 0;
  let final_TBM = 0;

  function TBMCalculator(final, length, midSem_score, finalsem_score) {
    TBM = (final + midSem_score * 3 + finalsem_score * 3) / (length + 6);
    final_TBM = final_TBM + TBM;

    return TBM;
  }

  return (
    <Table striped="columns" bordered hover>
      <thead>
        <tr>
          <th>Môn học</th>
          <th>Kiểm tra miệng</th>
          <th>Kiểm tra 15 phút</th>
          <th>
            Kiểm tra 1 tiết <br /> (hệ số 2)
          </th>
          <th>
            Kiểm tra giữa kì <br /> (hệ số 3)
          </th>
          <th>
            Kiểm tra cuối kì <br /> (hệ số 3)
          </th>
          <th>Trung bình môn</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          let final = 0;
          let length = 0;
          return (
            <Fragment>
              <tr>
                <td>{item.subject}</td>
                <td>
                  {item.oral_score.map((score) => {
                    length = length + 1;
                    final = final + score;
                    return score + " ";
                  })}
                </td>
                <td>
                  {item.fifteenminute_score.map((score) => {
                    length = length + 1;
                    final = final + score;
                    return score + " ";
                  })}
                </td>
                <td>
                  {item.onehour_score.map((score) => {
                    length = length + 2;
                    final = final + score * 2;
                    return score + " ";
                  })}
                </td>
                <td>{item.midSem_score}</td>
                <td>{item.finalsem_score}</td>
                <td>
                  {TBMCalculator(
                    final,
                    length,
                    item.midSem_score,
                    item.finalsem_score
                  )}
                </td>
              </tr>
            </Fragment>
          );
        })}
        <tr>
          <td colSpan={6} className="bg-primary text-light text-uppercase">
            <h5>Trung bình các môn</h5>
          </td>
          <td>
            <h5>{(final_TBM / data.length).toFixed(2)}</h5>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Outcome;
