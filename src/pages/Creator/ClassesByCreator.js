import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Img1 from '../../assets/images/slider-img/img-01.jpg';
import Img2 from '../../assets/images/slider-img/img-02.jpg';
import Img3 from '../../assets/images/slider-img/img-03.jpg';
import Img4 from '../../assets/images/slider-img/img-04.jpg';
import Img5 from '../../assets/images/slider-img/img-05.jpg';

function ClassesByCreator() {
  return (
    <>
      <section className="classes-by-creator-section" id="classes-by-creator-section">
        <div className="classes-by-creator-div">
          <div className="heading-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="heading-inner-div">
                    <h2>Classes by Michael Gray</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="owl-slider-main-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="owl-slider-main-slider">
                    <OwlCarousel
                      className="owl-carousel owl-theme our-classes-owl"
                      id="our-classes-owl"
                      loop={true}
                      items={3.2}
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
                        <div className="our-video-img-slider-box">
                          <div className="our-video-img-thumb">
                            <div className="img-thumb">
                              {' '}
                              <img
                                src={Img1}
                                className="img-fluid img-responsive"
                                alt="image"
                              />{' '}
                            </div>
                            <div className="video-button-div">
                              {' '}
                              <a href="" className="video-button-link">
                                <i className="fa fa-play"></i>
                              </a>{' '}
                            </div>
                          </div>
                          <div className="our-content-div">
                            <h3>
                              <a href="" className="link">
                                Vivamus suscipit tortor eget felis porttitor volutpat Mauris blandit
                                aliquet elit
                              </a>
                            </h3>
                            <h4>Michael Gray</h4>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="our-video-img-slider-box">
                          <div className="our-video-img-thumb">
                            <div className="img-thumb">
                              {' '}
                              <img
                                src={Img2}
                                className="img-fluid img-responsive"
                                alt="image"
                              />{' '}
                            </div>
                            <div className="video-button-div">
                              {' '}
                              <a href="" className="video-button-link">
                                <i className="fa fa-play"></i>
                              </a>{' '}
                            </div>
                          </div>
                          <div className="our-content-div">
                            <h3>
                              <a href="" className="link">
                                Vivamus suscipit tortor eget felis porttitor volutpat Mauris blandit
                                aliquet elit
                              </a>
                            </h3>
                            <h4>Michael Gray</h4>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="our-video-img-slider-box">
                          <div className="our-video-img-thumb">
                            <div className="img-thumb">
                              {' '}
                              <img
                                src={Img3}
                                className="img-fluid img-responsive"
                                alt="image"
                              />{' '}
                            </div>
                            <div className="video-button-div">
                              {' '}
                              <a href="" className="video-button-link">
                                <i className="fa fa-play"></i>
                              </a>{' '}
                            </div>
                          </div>
                          <div className="our-content-div">
                            <h3>
                              <a href="" className="link">
                                Vivamus suscipit tortor eget felis porttitor volutpat Mauris blandit
                                aliquet elit
                              </a>
                            </h3>
                            <h4>Michael Gray</h4>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="our-video-img-slider-box">
                          <div className="our-video-img-thumb">
                            <div className="img-thumb">
                              {' '}
                              <img
                                src={Img4}
                                className="img-fluid img-responsive"
                                alt="image"
                              />{' '}
                            </div>
                            <div className="video-button-div">
                              {' '}
                              <a href="" className="video-button-link">
                                <i className="fa fa-play"></i>
                              </a>{' '}
                            </div>
                          </div>
                          <div className="our-content-div">
                            <h3>
                              <a href="" className="link">
                                Vivamus suscipit tortor eget felis porttitor volutpat Mauris blandit
                                aliquet elit
                              </a>
                            </h3>
                            <h4>Michael Gray</h4>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="our-video-img-slider-box">
                          <div className="our-video-img-thumb">
                            <div className="img-thumb">
                              {' '}
                              <img
                                src={Img5}
                                className="img-fluid img-responsive"
                                alt="image"
                              />{' '}
                            </div>
                            <div className="video-button-div">
                              {' '}
                              <a href="" className="video-button-link">
                                <i className="fa fa-play"></i>
                              </a>{' '}
                            </div>
                          </div>
                          <div className="our-content-div">
                            <h3>
                              <a href="" className="link">
                                Vivamus suscipit tortor eget felis porttitor volutpat Mauris blandit
                                aliquet elit
                              </a>
                            </h3>
                            <h4>Michael Gray</h4>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="our-video-img-slider-box">
                          <div className="our-video-img-thumb">
                            <div className="img-thumb">
                              {' '}
                              <img
                                src={Img1}
                                className="img-fluid img-responsive"
                                alt="image"
                              />{' '}
                            </div>
                            <div className="video-button-div">
                              {' '}
                              <a href="" className="video-button-link">
                                <i className="fa fa-play"></i>
                              </a>{' '}
                            </div>
                          </div>
                          <div className="our-content-div">
                            <h3>
                              <a href="" className="link">
                                Vivamus suscipit tortor eget felis porttitor volutpat Mauris blandit
                                aliquet elit
                              </a>
                            </h3>
                            <h4>Michael Gray</h4>
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

export default ClassesByCreator;
