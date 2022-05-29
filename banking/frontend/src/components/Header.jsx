import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Liên hệ",
    path: "/lien-he",
  },
];

const Header = () => {
  const isLogged = JSON.parse(localStorage.getItem('isLogged'));
  const user = useSelector((state) => state.user.userInfor);
  const isAdmin = user && user.roleId == 0 ? false : true;
  const handleLogout = async () => {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  return (
    <header className="header-one">
      {/* Start header menu area */}
      <div id="sticker" className="header-area hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="row">
                {/* logo start */}
                <div className="col-md-3 col-sm-3">
                  <div className="logo">
                    {/* Brand */}
                    <Link to={"/"} className="navbar-brand page-scroll">
                      <img
                        width={60}
                        src="https://haitrieu.com/wp-content/uploads/2022/01/Logo-Agribank-V.png"
                        alt
                      />
                    </Link>
                  </div>
                  {/* logo end */}
                </div>
                <div className="col-md-9 col-sm-9">
                  <div className="header-right-link">
                    {/* search option end */}
                    {isLogged ? (
                      <Link
                        onClick={handleLogout}
                        className="s-menu"
                        to="/login"
                      >
                        Đăng xuất
                      </Link>
                    ) : (
                      <Link className="s-menu" to="/login">
                        Đăng nhập
                      </Link>
                    )}
                  </div>
                  {/* mainmenu start */}
                  <nav className="navbar navbar-default">
                    <div
                      className="collapse navbar-collapse"
                      id="navbar-example"
                    >
                      <div className="main-menu">
                        <ul className="nav navbar-nav navbar-right">
                          {mainNav.map((item, index) => {
                            return (
                              <li key={index}>
                                <Link className="pages" to={item.path}>
                                  {item.display}
                                </Link>
                              </li>
                            );
                          })}
                          {isLogged && isAdmin && (
                            <li>
                              <Link className="pages" to="/admin/dashboard">
                                Quản Lí
                              </Link>
                            </li>
                          )}
                          {isLogged && (
                            <li>
                              <Link className="pages" to="#">
                                {user && user.fullName}
                              </Link>

                              <ul className="sub-menu">
                                <li>
                                  <Link to="#">
                                    Số thẻ: {user && user.CreditCard.numberCard}
                                  </Link>
                                  <Link to="/quan-ly-tai-khoan">
                                    Quản lý tài khoản
                                  </Link>
                                  <Link to="/chuyen-tien">Chuyển tiền</Link>
                                </li>
                              </ul>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </nav>
                  {/* mainmenu end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
