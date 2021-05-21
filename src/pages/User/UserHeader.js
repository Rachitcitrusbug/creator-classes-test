import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../assets/images/white-icon-logo.svg';
import Profile from '../../assets/images/profile.png';

function UserHeader() {
  const history = useHistory();
  const authToken = localStorage.getItem('token');
  const profile_image = useSelector((state) => state.userData.profile_image);

  const [offset, setOffset] = useState(0);
  const [className, setClassName] = useState('header-div no-collapse-header clearfix');

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  });

  useEffect(() => {
    if (offset > 100) {
      setClassName('header-div header-div2 clearfix header-bgcolor slideInDown animated');
    } else {
      setClassName('header-div header-div2 clearfix');
    }
  });

  const handleLogout = () => {
    localStorage.clear();

    setTimeout(() => {
      history.push('/');
    }, 1000);
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
                      <Link className="logo_link clearfix" to={authToken ? '/user-home' : '/'}>
                        <img src={Logo} className="img-fluid logo_img main-logo-icon" alt="logo" />
                        <h1 className="text-logo">
                          {' '}
                          <span className="text-logo-span1">Creator</span>{' '}
                          <span className="text-logo-span2">classes</span>
                        </h1>
                      </Link>
                    </div>

                    <nav className="nav-center-div">
                      <div className="top-nav1">
                        <div className="cd-shadow-layer"></div>
                        <div className="nav-m-bar">
                          <Link
                            onClick="openNav()"
                            className="opennav"
                            data-placement="bottom"
                            title=""
                            data-original-title="Menu"
                          >
                            <i className="menu-bars menu-icon"></i>
                          </Link>
                        </div>

                        <div className="nav-div clearfix" id="mySidenav">
                          <Link to="javascript:void(0)" className="closebtn" onClick="closeNav()">
                            &times;
                          </Link>

                          <div className="row-nav-div">
                            <div className="left-side">
                              <ul className="nav ullist-inline" id="nav-res">
                                <li className="active">
                                  <Link to="" className="nav-link">
                                    Home
                                  </Link>
                                </li>
                                <li>
                                  <Link to="" className="nav-link">
                                    Live streams
                                  </Link>
                                </li>
                                <li>
                                  <Link to="" className="nav-link">
                                    Classes
                                  </Link>
                                </li>
                                <li>
                                  <Link to="" className="nav-link">
                                    Creators
                                  </Link>
                                </li>
                                <li>
                                  <Link to="" className="nav-link">
                                    Materials
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="right-side">
                              <div className="right-nf-icon-div">
                                <div className="icon-row-nf">
                                  <div className="icon-box-nf">
                                    <Link to="" className="link">
                                      {' '}
                                      <span className="material-icons">favorite</span>{' '}
                                    </Link>
                                  </div>
                                  <div className="icon-box-nf">
                                    <Link
                                      to=""
                                      className="link"
                                      data-toggle="modal"
                                      data-target="#notifications-modal"
                                    >
                                      {' '}
                                      <span className="material-icons">notifications</span>{' '}
                                      <span className="text-count-n">1</span>{' '}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="user-drop-down">
                                <div className="dropdown drop-left dropdown-custom-top">
                                  <Link
                                    className="btn btn-default dropdown-toggle"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <div className="user-profile">
                                      <div className="user-img">
                                        <img
                                          src={
                                            profile_image == '' ||
                                            profile_image == null ||
                                            profile_image == undefined ||
                                            profile_image ==
                                              'https://myapp-user-uploads154822-dev.s3.amazonaws.com/sample.jpg'
                                              ? Profile
                                              : profile_image
                                          }
                                          className="user-top-image"
                                          alt="user image"
                                        />
                                      </div>
                                    </div>
                                  </Link>
                                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <ul>
                                      <li>
                                        <Link className="dropdown-item" to="">
                                          {' '}
                                          <span className="bg-custom-icon user-icon"></span> Profile
                                          Settings
                                        </Link>
                                      </li>
                                      <li className="logout-li">
                                        <Link className="dropdown-item" onClick={handleLogout}>
                                          {' '}
                                          <span className="bg-custom-icon logout-icon"></span>{' '}
                                          Logout
                                        </Link>
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

export default UserHeader;

UserHeader.propTypes = {
  image: PropTypes.any,
};
