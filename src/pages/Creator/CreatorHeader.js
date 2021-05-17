import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

function CreatorHeader() {
  const history = useHistory();
  const handleLogoClick = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  return (
    <>
      <header>
        <div className="header-div clearfix">
          <div className="inner-top-header-div clearfix">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="header-container">
                    <div className="logo-div">
                      <a
                        className="logo_link clearfix"
                        href=""
                        onClick={handleLogoClick}
                      >
                        <img
                          src={Logo}
                          className="img-fluid logo_img main-logo"
                          alt="logo"
                        />
                      </a>
                    </div>

                    <nav className="nav-center-div">
                      <div className="top-nav1">
                        <div className="cd-shadow-layer"></div>
                        <div className="nav-m-bar">
                          <a
                            onClick="openNav()"
                            className="opennav"
                            data-placement="bottom"
                            title=""
                            data-original-title="Menu"
                          >
                            <i className="menu-bars menu-icon"></i>
                          </a>
                        </div>
                        <div className="nav-div clearfix" id="mySidenav">
                          <a
                            href="javascript:void(0)"
                            className="closebtn"
                            onClick="closeNav()"
                          >
                            &times;
                          </a>
                          <div className="right-side">
                            <ul className="nav ullist-inline" id="nav-res">
                              <li>
                                <a
                                  href=""
                                  className="nav-link login-in-btn login-color2"
                                  onClick={handleLoginClick}
                                >
                                  Login
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default CreatorHeader;
