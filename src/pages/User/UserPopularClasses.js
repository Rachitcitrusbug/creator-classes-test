import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import LiveImg1 from '../../assets/images/live-card/img.png';
import LiveImg2 from '../../assets/images/live-card/img-1.png';
import LiveImg3 from '../../assets/images/live-card/img-2.png';
import LiveImg4 from '../../assets/images/live-card/img-3.png';
import Creator3 from '../../assets/images/creators/creators3.jpg';

function UserPopularClasses() {
  return (
    <>
      <section className="our-pop-classes-section" id="our-pop-classes-section">
        <div className="container container-1200">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="our-pop-classes-div bordertop1">
                <div className="common-heading-div">
                  <div className="common-heading-inner-div">
                    <div className="common-heading-title-row">
                      <div className="common-heading-title-left">
                        <h2>Our Popular Classes</h2>
                      </div>
                      <div className="common-heading-title-right">
                        <Link to="" className="btn btn-primary-outline btn-primary-outline-n45">
                          <span className="text">View all</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="owl-slider-new-main-div">
                  <div className="container container-1200">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="owl-slider-new-main-slider">
                          <OwlCarousel
                            className="owl-carousel owl-theme our-classes-owl owl-loaded owl-drag"
                            loop
                            margin={15}
                            nav
                          >
                            <div className="item">
                              <div className="our-video-common-slider-box">
                                <div className="our-video-img-thumb">
                                  <div className="img-thumb">
                                    {' '}
                                    <img
                                      src={LiveImg1}
                                      className="img-fluid img-responsive"
                                      alt="image"
                                    />{' '}
                                  </div>
                                  <div className="like-box-abs">
                                    {' '}
                                    <button className="like-button">
                                      <span className="like-icon "> </span>
                                    </button>{' '}
                                  </div>
                                  <div className="time-box-abs">
                                    {' '}
                                    <button className="time-button"> 13:47 </button>{' '}
                                  </div>
                                </div>
                                <div className="our-content-div">
                                  <div className="our-content-row">
                                    <div className="our-content-full">
                                      <h4>
                                        <Link to="">
                                          How to learn photography in an efficient way
                                        </Link>{' '}
                                      </h4>
                                    </div>

                                    <div className="our-content-left">
                                      <div className="thumb-img">
                                        <Link to="" className="link">
                                          <img
                                            src={Creator3}
                                            className="img-fluid user"
                                            alt="user"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="our-content-right">
                                      <h3>
                                        <Link to="" className="link">
                                          Mike Visuals{' '}
                                          <span className="icon-rounded-span check-icon-rounded">
                                            <span className="material-icons">done</span>
                                          </span>{' '}
                                        </Link>
                                      </h3>
                                      <p>Visual Expert</p>
                                    </div>
                                  </div>

                                  <div className="our-content-bottom-row">
                                    <div className="our-content-bottom-left">
                                      <div className="label-div">
                                        <span className="txt-label">Popular</span>
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

                            <div className="item">
                              <div className="our-video-common-slider-box">
                                <div className="our-video-img-thumb">
                                  <div className="img-thumb">
                                    {' '}
                                    <img
                                      src={LiveImg2}
                                      className="img-fluid img-responsive"
                                      alt="image"
                                    />{' '}
                                  </div>
                                  <div className="like-box-abs">
                                    {' '}
                                    <button className="like-button">
                                      <span className="like-icon "> </span>
                                    </button>{' '}
                                  </div>
                                  <div className="time-box-abs">
                                    {' '}
                                    <button className="time-button"> 13:47 </button>{' '}
                                  </div>
                                </div>
                                <div className="our-content-div">
                                  <div className="our-content-row">
                                    <div className="our-content-full">
                                      <h4>
                                        <Link to="">
                                          How to learn photography in an efficient way
                                        </Link>{' '}
                                      </h4>
                                    </div>

                                    <div className="our-content-left">
                                      <div className="thumb-img">
                                        <Link to="" className="link">
                                          <img
                                            src={Creator3}
                                            className="img-fluid user"
                                            alt="user"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="our-content-right">
                                      <h3>
                                        <Link to="" className="link">
                                          Mike Visuals{' '}
                                          <span className="icon-rounded-span check-icon-rounded">
                                            <span className="material-icons">done</span>
                                          </span>{' '}
                                        </Link>
                                      </h3>
                                      <p>Visual Expert</p>
                                    </div>
                                  </div>

                                  <div className="our-content-bottom-row">
                                    <div className="our-content-bottom-left">
                                      <div className="label-div">
                                        <span className="txt-label">Popular</span>
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

                            <div className="item">
                              <div className="our-video-common-slider-box">
                                <div className="our-video-img-thumb">
                                  <div className="img-thumb">
                                    {' '}
                                    <img
                                      src={LiveImg3}
                                      className="img-fluid img-responsive"
                                      alt="image"
                                    />{' '}
                                  </div>
                                  <div className="like-box-abs">
                                    {' '}
                                    <button className="like-button">
                                      <span className="like-icon "> </span>
                                    </button>{' '}
                                  </div>
                                  <div className="time-box-abs">
                                    {' '}
                                    <button className="time-button"> 13:47 </button>{' '}
                                  </div>
                                </div>
                                <div className="our-content-div">
                                  <div className="our-content-row">
                                    <div className="our-content-full">
                                      <h4>
                                        <Link to="">
                                          How to learn photography in an efficient way
                                        </Link>{' '}
                                      </h4>
                                    </div>

                                    <div className="our-content-left">
                                      <div className="thumb-img">
                                        <Link to="" className="link">
                                          <img
                                            src={Creator3}
                                            className="img-fluid user"
                                            alt="user"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="our-content-right">
                                      <h3>
                                        <Link to="" className="link">
                                          Mike Visuals{' '}
                                          <span className="icon-rounded-span check-icon-rounded">
                                            <span className="material-icons">done</span>
                                          </span>{' '}
                                        </Link>
                                      </h3>
                                      <p>Visual Expert</p>
                                    </div>
                                  </div>

                                  <div className="our-content-bottom-row">
                                    <div className="our-content-bottom-left">
                                      <div className="label-div">
                                        <span className="txt-label">Popular</span>
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

                            <div className="item">
                              <div className="our-video-common-slider-box">
                                <div className="our-video-img-thumb">
                                  <div className="img-thumb">
                                    {' '}
                                    <img
                                      src={LiveImg4}
                                      className="img-fluid img-responsive"
                                      alt="image"
                                    />{' '}
                                  </div>
                                  <div className="like-box-abs">
                                    {' '}
                                    <button className="like-button">
                                      <span className="like-icon "> </span>
                                    </button>{' '}
                                  </div>
                                  <div className="time-box-abs">
                                    {' '}
                                    <button className="time-button"> 13:47 </button>{' '}
                                  </div>
                                </div>
                                <div className="our-content-div">
                                  <div className="our-content-row">
                                    <div className="our-content-full">
                                      <h4>
                                        <Link to="">
                                          How to learn photography in an efficient way
                                        </Link>{' '}
                                      </h4>
                                    </div>

                                    <div className="our-content-left">
                                      <div className="thumb-img">
                                        <Link to="" className="link">
                                          <img
                                            src={Creator3}
                                            className="img-fluid user"
                                            alt="user"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="our-content-right">
                                      <h3>
                                        <Link to="" className="link">
                                          Mike Visuals{' '}
                                          <span className="icon-rounded-span check-icon-rounded">
                                            <span className="material-icons">done</span>
                                          </span>{' '}
                                        </Link>
                                      </h3>
                                      <p>Visual Expert</p>
                                    </div>
                                  </div>

                                  <div className="our-content-bottom-row">
                                    <div className="our-content-bottom-left">
                                      <div className="label-div">
                                        <span className="txt-label">Popular</span>
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
                          </OwlCarousel>
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
    </>
  );
}

export default UserPopularClasses;
