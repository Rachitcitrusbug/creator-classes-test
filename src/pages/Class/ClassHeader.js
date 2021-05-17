import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/white-icon-logo.svg";
import Profile from "../../assets/images/profile.png";

function ClassHeader() {
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
        "header-div header-div2 clearfix header-bgcolor slideInDown animated"
      );
    } else {
      setClassName("header-div header-div2 clearfix");
    }
  });

  const history = useHistory();
  const handleLogoClick = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <>
      <header>
        <div className={className}>
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
                          className="img-fluid logo_img main-logo-icon"
                          alt="logo"
                        />
                        <h1 class="text-logo">
                          {" "}
                          <span class="text-logo-span1">Creator</span>{" "}
                          <span class="text-logo-span2">classes</span>
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
                            onclick="closeNav()"
                          >
                            &times;
                          </a>

                          <div className="row-nav-div">
                            <div className="left-side">
                              <ul className="nav ullist-inline" id="nav-res">
                                <li className="active">
                                  <a href="" className="nav-link">
                                    Home
                                  </a>
                                </li>
                                <li>
                                  <a href="" className="nav-link">
                                    Live streams
                                  </a>
                                </li>
                                <li>
                                  <a href="" className="nav-link">
                                    Classes
                                  </a>
                                </li>
                                <li>
                                  <a href="" className="nav-link">
                                    Creators
                                  </a>
                                </li>
                                <li>
                                  <a href="" className="nav-link">
                                    Materials
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="right-side">
                              <div className="right-nf-icon-div">
                                <div className="icon-row-nf">
                                  <div className="icon-box-nf">
                                    <a href="" className="link">
                                      {" "}
                                      <span className="material-icons">
                                        favorite
                                      </span>{" "}
                                    </a>
                                  </div>
                                  <div className="icon-box-nf">
                                    <a
                                      href=""
                                      className="link"
                                      data-toggle="modal"
                                      data-target="#notifications-modal"
                                    >
                                      {" "}
                                      <span className="material-icons">
                                        notifications
                                      </span>{" "}
                                      <span className="text-count-n">1</span>{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="user-drop-down">
                                <div className="dropdown drop-left dropdown-custom-top">
                                  <a
                                    className="btn btn-default dropdown-toggle"
                                    href=""
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <div className="user-profile">
                                      <div className="user-img">
                                        <img
                                          src={Profile}
                                          className="user-top-image"
                                          alt="user image"
                                        />
                                      </div>
                                    </div>
                                  </a>
                                  <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                  >
                                    <ul>
                                      <li>
                                        <a className="dropdown-item" href="">
                                          {" "}
                                          <span className="bg-custom-icon user-icon"></span>{" "}
                                          Profile Settings
                                        </a>
                                      </li>
                                      <li className="logout-li">
                                        <a className="dropdown-item" href="">
                                          {" "}
                                          <span className="bg-custom-icon logout-icon"></span>{" "}
                                          Logout
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
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

export default ClassHeader;
