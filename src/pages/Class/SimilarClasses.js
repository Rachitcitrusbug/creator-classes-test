import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Img1 from '../../assets/images/user-home/img-01.jpg';
import Img2 from '../../assets/images/user-home/img-02.jpg';
import Img3 from '../../assets/images/user-home/img-03.jpg';
import Img4 from '../../assets/images/user-home/img-04.jpg';
import Creator1 from '../../assets/images/creators/creators1.jpg';
import Creator2 from '../../assets/images/creators/creators2.jpg';
import Creator6 from '../../assets/images/creators/creators6.jpg';

function SimilarClasses() {
  return (
    <>
      <section className="similar-classes-section" id="similar-classes-section">
        <div className="similar-classes-div">
          <div className="heading-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="heading-inner-div">
                    <h2>Similar Classes</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="owl-slider-common-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="owl-slider-common-slider">
                    <OwlCarousel
                      className="owl-carousel owl-theme our-common-slider-owl"
                      id="our-popular-classes-owl"
                      loop={true}
                      items={3.1}
                      margin={15}
                      nav={false}
                      dots={false}
                      stagePadding={0}
                      autoplay={true}
                      smartSpeed={2000}
                      responsiveClass={true}
                      responsive={{
                        0: {
                          items: 2,
                          autoplay: true,
                          center: true,
                          margin: 8,
                        },
                        600: {
                          items: 2.3,
                        },
                        1200: {
                          items: 3.1,
                        },
                        1600: {
                          items: 4.8,
                        },
                      }}
                    >
                      <div className="item">
                        <div className="our-video-common-slider-box">
                          <div className="our-video-img-thumb">
                            <div className="img-thumb">
                              {' '}
                              <img
                                src={Img1}
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
                            <div className="video-button-div">
                              {' '}
                              <a href="#" className="video-button-link">
                                <i className="fa fa-play"></i>
                              </a>{' '}
                            </div>
                          </div>
                          <div className="our-content-div">
                            <div className="our-content-row">
                              <div className="our-content-left">
                                <div className="thumb-img">
                                  <a href="#" className="link">
                                    <img src={Creator2} className="img-fluid user" alt="user" />
                                  </a>
                                </div>
                              </div>
                              <div className="our-content-right">
                                <h3>
                                  <a href="#" className="link">
                                    Vivamus suscipit tortor eget felis porttitor volutpat Mauris
                                    blandit aliquet elit
                                  </a>
                                </h3>
                                <h4>
                                  {' '}
                                  <a href="#" className="link name-link">
                                    <span className="name-span">Michael Gray</span>
                                  </a>{' '}
                                  <span className="dot-span">•</span>{' '}
                                  <span className="text">Posted 10 hours ago</span>{' '}
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
                                src={Img2}
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
                            <div className="video-button-div">
                              {' '}
                              <a href="#" className="video-button-link">
                                <i className="fa fa-play"></i>
                              </a>{' '}
                            </div>
                          </div>
                          <div className="our-content-div">
                            <div className="our-content-row">
                              <div className="our-content-left">
                                <div className="thumb-img">
                                  <a href="#" className="link">
                                    <img src={Creator1} className="img-fluid user" alt="user" />
                                  </a>
                                </div>
                              </div>
                              <div className="our-content-right">
                                <h3>
                                  <a href="#" className="link">
                                    Vivamus suscipit tortor eget felis porttitor volutpat Mauris
                                    blandit aliquet elit
                                  </a>
                                </h3>
                                <h4>
                                  {' '}
                                  <a href="#" className="link name-link">
                                    <span className="name-span">Michael Gray</span>
                                  </a>{' '}
                                  <span className="dot-span">•</span>{' '}
                                  <span className="text">Posted 10 hours ago</span>{' '}
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
                                src={Img3}
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
                            <div className="video-button-div">
                              {' '}
                              <a href="#" className="video-button-link">
                                <i className="fa fa-play"></i>
                              </a>{' '}
                            </div>
                          </div>
                          <div className="our-content-div">
                            <div className="our-content-row">
                              <div className="our-content-left">
                                <div className="thumb-img">
                                  <a href="#" className="link">
                                    <img src={Creator6} className="img-fluid user" alt="user" />
                                  </a>
                                </div>
                              </div>
                              <div className="our-content-right">
                                <h3>
                                  <a href="#" className="link">
                                    Vivamus suscipit tortor eget felis porttitor volutpat Mauris
                                    blandit aliquet elit
                                  </a>
                                </h3>
                                <h4>
                                  {' '}
                                  <a href="#" className="link name-link">
                                    <span className="name-span">Michael Gray</span>
                                  </a>{' '}
                                  <span className="dot-span">•</span>{' '}
                                  <span className="text">Posted 10 hours ago</span>{' '}
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
                                src={Img4}
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
                            <div className="video-button-div">
                              {' '}
                              <a href="#" className="video-button-link">
                                <i className="fa fa-play"></i>
                              </a>{' '}
                            </div>
                          </div>
                          <div className="our-content-div">
                            <div className="our-content-row">
                              <div className="our-content-left">
                                <div className="thumb-img">
                                  <a href="#" className="link">
                                    <img src={Creator6} className="img-fluid user" alt="user" />
                                  </a>
                                </div>
                              </div>
                              <div className="our-content-right">
                                <h3>
                                  <a href="#" className="link">
                                    Vivamus suscipit tortor eget felis porttitor volutpat Mauris
                                    blandit aliquet elit
                                  </a>
                                </h3>
                                <h4>
                                  {' '}
                                  <a href="#" className="link name-link">
                                    <span className="name-span">Michael Gray</span>
                                  </a>{' '}
                                  <span className="dot-span">•</span>{' '}
                                  <span className="text">Posted 10 hours ago</span>{' '}
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
      </section>
    </>
  );
}

export default SimilarClasses;
