import React from "react";

import "./footer.scss";

const Footer = (props) => {
  return (
    <div className="Footer">
      <div className="Footer__wrapper bg-primary p-4 text-light" height="100%">
        <h5>ĐƠN VỊ CHỦ QUẢN: TRƯỜNG TRUNG HỌC PHỔ THÔNG AN PHÚ</h5>
        <p className="m-0">
          Địa chỉ: Thị Trấn An Phú - Huyện An Phú - Tỉnh An Giang
        </p>
        <p>
          <b>Email</b>: c3anphuap@angiang.edu.vn
        </p>
      </div>
    </div>
  );
};

export default Footer;
