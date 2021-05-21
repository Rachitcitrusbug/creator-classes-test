import React from 'react';
import { Link } from 'react-router-dom';
import SimilarClasses from '../../pages/Class/SimilarClasses';
import Footer from '../../pages/Home/Footer';
import Header from '../../pages/Home/Header';
import UserFooter from '../../pages/User/UserFooter';
import UserHeader from '../../pages/User/UserHeader';
import LiveVideo from '../../assets/images/video/video.mp4';
import Creator3 from '../../assets/images/creators/creators3.jpg';

function LiveStreamDetails() {
  const authToken = localStorage.getItem('token');

  return (
    <>
      <div id="wrapper" className="wrapper user-home-wrapper">
        {authToken ? <UserHeader /> : <Header />}
        <div className="main-middle-area user-main-middle-area main-bg-color">
          <div className="header-footer-with-min-height01">
            <section className="uplstr-section">
              <div className="container container-1200">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="single-course-div">
                      <div className="single-course-top">
                        <div className="single-course-top-row">
                          <div className="row">
                            <div className="col-lg-8 col-md-8">
                              <div className="heading-top-div">
                                <h2>
                                  Photography is undoubtedly the art form of the modern day almost
                                  everyone has access to a camera.
                                </h2>
                              </div>
                            </div>
                          </div>

                          <div className="row lf-upc-mian-row">
                            <div className="col-lg-8 col-md-7 lf-upc-left-col">
                              <div className="lf-upc-ls-div">
                                <div className="lf-upc-ls-row">
                                  <div className="video-view-div">
                                    <div className="video-view-center-div">
                                      <video
                                        className="video-full-div"
                                        id="live-video-stream-play"
                                        controls
                                        loop
                                        muted="false"
                                      >
                                        <source src={LiveVideo} type="video/mp4" />
                                        Your browser does not support the video tag.
                                      </video>

                                      <div className="btn-video-btn-center">
                                        <button
                                          className="btn-video-custom"
                                          id="video-btn"
                                          onClick=""
                                        >
                                          {' '}
                                          <span className="bg-custom-icon video-play-new-icon"></span>{' '}
                                        </button>
                                      </div>

                                      <div className="btn-top-right-div">
                                        <div className="sp-label-div">
                                          <a href="" className="link link-black-sp">
                                            {' '}
                                            <i className="bg-custom-icon video-camera-new-icon"></i>{' '}
                                            Sneak Peek
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="single-category-row">
                                    <div className="single-category-left">
                                      <div className="category-inner">
                                        <ul className="cate-list-ul">
                                          <li>
                                            <a href="" className="category-link">
                                              {' '}
                                              <span className="span-text"> Photography </span>{' '}
                                            </a>
                                          </li>
                                          <li>
                                            <a href="" className="category-link">
                                              {' '}
                                              <span className="span-text"> Filmmaking </span>{' '}
                                            </a>
                                          </li>
                                          <li>
                                            <a href="" className="category-link">
                                              {' '}
                                              <span className="span-text">
                                                {' '}
                                                Video Editing{' '}
                                              </span>{' '}
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="single-category-right">
                                      <div className="link-div">
                                        <a href="" className="link link-custom-primary">
                                          + Add to favorites
                                        </a>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="our-content-bottom-row">
                                    <div className="our-content-bottom-left">
                                      <div className="our-content-left">
                                        <div className="thumb-img">
                                          <a href="" className="link">
                                            <img
                                              src={Creator3}
                                              className="img-fluid user"
                                              alt="user"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="our-content-right">
                                        <h3>
                                          <a href="" className="link">
                                            Mike Visuals{' '}
                                            <span className="icon-rounded-span check-icon-rounded">
                                              <span className="material-icons">done</span>{' '}
                                            </span>
                                          </a>
                                        </h3>
                                        <p>Visual Expert</p>
                                      </div>
                                    </div>
                                    <div className="our-content-bottom-right">
                                      <h4>
                                        <span className="material-icons">schedule</span>{' '}
                                        <span className="txt">Posted 10 hours ago</span>{' '}
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-4 col-md-5 lf-upc-left-col">
                              <div className="rg-upc-ls-div">
                                <div className="rg-upc-ls-row">
                                  <div className="book-now-learn-card-div">
                                    <div className="book-now-learn-card-row">
                                      <div className="book-now-learn-card-top-div">
                                        <a href="" className="filter-link">
                                          {' '}
                                          <span className="icon-img-span">
                                            {' '}
                                            <i className="bg-custom-icon calendar-time-icon-new"></i>{' '}
                                          </span>{' '}
                                          <span className="span-text"> Set Reminder </span>{' '}
                                        </a>
                                      </div>

                                      <div className="book-now-learn-card-body-div">
                                        <div className="heading-title">
                                          <h3>What you will learn?</h3>
                                        </div>
                                        <div className="desc-box">
                                          <ul className="check-list-ul">
                                            <li>Color, Light, and Design Techniques</li>
                                            <li>Capturing Motion in Photos</li>
                                            <li>Understanding Composition</li>
                                            <li>Setting Up Photo Studio Lighting</li>
                                            <li>Color, Light, and Design Techniques</li>
                                            <li>Capturing Motion in Photos</li>
                                          </ul>
                                        </div>
                                      </div>

                                      <div className="book-now-learn-card-bottom-div">
                                        <div className="btn-div-group">
                                          <Link
                                            to="/book-seat"
                                            className="btn btn-primary-outline-icon-text"
                                            data-toggle="modal"
                                            data-target="#general-book-course-modal"
                                          >
                                            <span className="icon-span">
                                              <i className="bg-custom-icon invoice-icon-new"></i>
                                            </span>
                                            <span className="text">Book Now</span>
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <SimilarClasses />
          </div>
        </div>
        {authToken ? <UserFooter /> : <Footer />}
      </div>
    </>
  );
}

export default LiveStreamDetails;
