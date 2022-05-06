import React from 'react'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <div className="slide-area slide-area-2 fix">
        <div className="display-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                <div className="slide-text-inner">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    {/* Start slide content */}
                    <div className="slide-content text-center">
                      <h2 className="title2">
                        Chuyển tiền với các bước an toàn và dễ dàng
                      </h2>
                      <p>
                        Nhanh chóng và dễ dàng khi bạn muốn được gửi an toàn hơn và
                        tiết kiệm thời gian
                      </p>
                      <div className="layer-1-3">
                        <Link to={localStorage.isLogged ? "/chuyen-tien":"/login"} className="ready-btn">
                          Bắt đầu
                        </Link>
                      </div>
                    </div>
                    {/* End slide content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner