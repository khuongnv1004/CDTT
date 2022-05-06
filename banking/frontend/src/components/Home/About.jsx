import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about-area bg-color2 area-padding">
        <div className="container">
          <div className="row">
            {/* Start column*/}
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="about-image">
                <img
                  src="http://rockstheme.com/rocks/bultifore-preview/img/about/vd.jpg"
                  alt
                  className="ab-first-img"
                />
                <img
                  src="http://rockstheme.com/rocks/bultifore-preview/img/about/vd1.jpg"
                  alt
                  className="ab-second-img"
                />
              </div>
            </div>
            {/* End column*/}
            {/* Start column*/}
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="about-content">
                <h3>
                  Tại sao bạn nên chọn dịch vụ thanh toán trực tuyến của
                  chúng tôi?
                </h3>
                <p className="hidden-sm">
                  {" "}
                 Để hướng tới trở thành dịch vụ thanh toán rộng rãi trên toàn thế giới. Chúng tôi:
                </p>
                <div className="about-details">
                  <div className="single-about">
                    <a href="#">
                      <i className="flaticon-079-graphic" />
                    </a>
                    <div className="icon-text">
                      <h5>Miễn phí giao dịch</h5>
                      <p>
                        Miễn phí giao dịch trọn đời
                      </p>
                    </div>
                  </div>
                  <div className="single-about">
                    <a href="#">
                      <i className="flaticon-007-document-2" />
                    </a>
                    <div className="icon-text">
                      <h5>An toàn &amp; Bảo mật</h5>
                      <p>
                        An toàn và bảo mật thông tin khách hàng
                      </p>
                    </div>
                  </div>
                  <div className="single-about">
                    <a href="#">
                      <i className="flaticon-107-speech-bubbles" />
                    </a>
                    <div className="icon-text">
                      <h5>Hỗ trợ trực tuyến</h5>
                      <p>
                        Thủ tục vay trực tuyến
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End column*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
