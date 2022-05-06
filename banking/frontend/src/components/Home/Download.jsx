import React from "react";

const Download = () => {
  return (
    <>
      <div className="download-area bg-color2 area-padding">
        <div className="container">
          <div className="row">
            {/* Start column */}
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="download-text text-justify">
                <h3>
                  Tải xuống ứng dụng của chúng tôi về điện thoại di động của bạn
                  để chúng tôi có thể phục vụ bạn một cách tốt nhất.
                </h3>
                <p>
                  Các nền tảng chúng tôi đã có mặt:
                </p>
                <div className="down-btn" data-wow-delay="0.7s">
                  <a href="#" className="app-btn left-btn">
                    Play store
                  </a>
                  <a href="#" className="app-btn right-btn">
                    App store
                  </a>
                </div>
              </div>
            </div>
            {/* End column */}
            {/* Start column */}
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="download-image">
                <img
                  src="http://rockstheme.com/rocks/bultifore-preview/img/about/download.jpg"
                  alt="download-image"
                />
              </div>
            </div>
            {/* End column */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
