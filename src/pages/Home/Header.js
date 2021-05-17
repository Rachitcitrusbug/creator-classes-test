import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/white-icon-logo.svg";

function Header() {
  const [offset, setOffset] = useState(0);
  const [className, setClassName] = useState(
    "header-div no-collapse-header clearfix"
  );

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  });

  useEffect(() => {
    if (offset > 100) {
      setClassName(
        "header-div no-collapse-header clearfix header-bgcolor slideInDown animated"
      );
    } else {
      setClassName("header-div no-collapse-header clearfix");
    }
  });

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
        <div className={className}>
          <div className="inner-top-header-div clearfix">
            <div className="container container-1200">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="header-container">
                    <div className="logo-div">
                      <a
                        className="logo_link clearfix"
                        href="#"
                        onClick={handleLogoClick}
                      >
                        <img
                          src={Logo}
                          className="img-fluid logo_img main-logo"
                          alt="logo"
                        />
                        <h1 className="text-logo">
                          {" "}
                          <span className="text-logo-span1">Creator</span>{" "}
                          <span className="text-logo-span2">classes</span>
                        </h1>
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
                                  href="#"
                                  className="nav-link login-in-btn"
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

export default Header;
