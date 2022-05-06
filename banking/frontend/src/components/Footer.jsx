import React from "react";

const Footer = () => {
  return (
    <footer className="footer-1">
      <div className="footer-area">
        <div className="container">
          <div className="row">
            {/* Start column*/}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="footer-content logo-footer">
                <div className="footer-head">
                  <div className="footer-logo">
                    <a className="footer-black-logo" href="#">
                      <img
                        width={70}
                        src="https://haitrieu.com/wp-content/uploads/2022/01/Logo-Agribank-V.png"
                        alt
                      />
                    </a>
                  </div>
                  <p>
                    Đăng ký để nhận được những thông tin mới nhất của chúng tôi!
                  </p>
                  <div className="subs-feilds">
                    <div className="suscribe-input">
                      <input
                        type="email"
                        className="email form-control width-80"
                        id="sus_email"
                        placeholder="Email"
                      />
                      <button type="submit" id="sus_submit" className="add-btn">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End column*/}
            {/* Start column*/}
            <div className="col-md-2 col-sm-3 col-xs-12">
              <div className="footer-content">
                <div className="footer-head">
                  <h4>Sản phẩm</h4>
                  <ul className="footer-list">
                    <li>
                      <a href="#">Tài khoản ngân hàng</a>
                    </li>
                    <li>
                      <a href="#">Rút tiền</a>
                    </li>
                    <li>
                      <a href="#">Tiếp thị</a>
                    </li>
                    <li>
                      <a href="#">Phần mềm</a>
                    </li>
                    <li>
                      <a href="#">Thương hiệu </a>
                    </li>
                    <li>
                      <a href="#">Hậu mãi </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End column*/}
            {/* Start column*/}
            <div className="col-md-2 col-sm-3 col-xs-12">
              <div className="footer-content">
                <div className="footer-head">
                  <h4>Thanh toán</h4>
                  <ul className="footer-list">
                    <li>
                      <a href="#">Chuyển tiền</a>
                    </li>
                    <li>
                      <a href="#">Nhận tiền </a>
                    </li>
                    <li>
                      <a href="#">Mua sắm</a>
                    </li>
                    <li>
                      <a href="#">Thanh toán online</a>
                    </li>
                    <li>
                      <a href="#"> Thanh toán hóa đơn </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
            {/* End column*/}
            {/* Start column*/}
            <div className="col-md-2 hidden-sm col-xs-12">
              <div className="footer-content">
                <div className="footer-head">
                  <h4>Công ty</h4>
                  <ul className="footer-list">
                    <li>
                      <a href="#">Về chúng tôi</a>
                    </li>
                    <li>
                      <a href="#">Dịch vụ </a>
                    </li>
                    <li>
                      <a href="#">Sự kiện</a>
                    </li>
                    <li>
                      <a href="#">Promotion</a>
                    </li>
                    <li>
                      <a href="#">Transition</a>
                    </li>
                    <li>
                      <a href="#">Kênh truyền thông</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End column*/}
            {/* Start column*/}
            <div className="col-md-2 hidden-sm col-xs-12">
              <div className="footer-content last-content">
                <div className="footer-head">
                  <h4>Trợ giúp</h4>
                  <ul className="footer-list">
                    <li>
                      <a href="#">Chăm sóc khách hàng</a>
                    </li>
                    <li>
                      <a href="#">Trao đổi trực tiếp</a>
                    </li>
                    <li>
                      <a href="#">Thông báo</a>
                    </li>
                    <li>
                      <a href="#">Bảo mật</a>
                    </li>
                    <li>
                      <a href="#">Kỳ hạn &amp; Điều kiện</a>
                    </li>
                    <li>
                      <a href="#">Liên hệ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End column*/}
          </div>
        </div>
      </div>
      {/* Start footer bottom area */}
      <div className="footer-area-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="copyright">
                <p>

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End footer bottom area */}
    </footer>
  );
};

export default Footer;
