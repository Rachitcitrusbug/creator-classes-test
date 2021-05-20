import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Img1 from '../../assets/images/materials/materials-img-01.jpg';
import Img2 from '../../assets/images/materials/materials-img-02.jpg';
import Img3 from '../../assets/images/materials/materials-img-03.jpg';
import Img4 from '../../assets/images/materials/materials-img-04.jpg';
import Img5 from '../../assets/images/materials/materials-img-05.jpg';
import Img6 from '../../assets/images/materials/materials-img-06.jpg';

function MaterialsByCreator() {
  return (
    <>
      <section className="materials-creators-section" id="materials-creators-section">
        <div className="materials-creators-div">
          <div className="heading-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="heading-inner-div">
                    <div className="heading-title-row">
                      <div className="heading-title-left">
                        <h2>Materials by Michael Gray </h2>
                      </div>
                      <div className="heading-title-right">
                        <div className="link-div">
                          {' '}
                          <a href="" className="link view-all-link">
                            View All
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="materials-creators-slider-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="materials-creators-slider">
                    <OwlCarousel
                      className="owl-carousel owl-theme materials-creators-owl-div"
                      id="materials-creators-owl"
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
                          items: 3,
                        },
                        1600: {
                          items: 4.8,
                        },
                      }}
                    >
                      <div className="item">
                        <div className="materials-creators-slider-box">
                          <a href="" className="creators-img-link">
                            <div className="creators-img-mask-thumb">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={Img1}
                                  className="img-fluid img-responsive"
                                  alt="image"
                                />{' '}
                              </div>
                            </div>
                          </a>
                          <div className="creators-content-div">
                            <h3>
                              <a href="" className="link">
                                Photo Presets
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="materials-creators-slider-box">
                          <a href="" className="creators-img-link">
                            <div className="creators-img-mask-thumb">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={Img2}
                                  className="img-fluid img-responsive"
                                  alt="image"
                                />{' '}
                              </div>
                            </div>
                          </a>
                          <div className="creators-content-div">
                            <h3>
                              <a href="" className="link">
                                Video LUTs
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="materials-creators-slider-box">
                          <a href="" className="creators-img-link">
                            <div className="creators-img-mask-thumb">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={Img3}
                                  className="img-fluid img-responsive"
                                  alt="image"
                                />{' '}
                              </div>
                            </div>
                          </a>
                          <div className="creators-content-div">
                            <h3>
                              <a href="" className="link">
                                SFX
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="materials-creators-slider-box">
                          <a href="" className="creators-img-link">
                            <div className="creators-img-mask-thumb">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={Img4}
                                  className="img-fluid img-responsive"
                                  alt="image"
                                />{' '}
                              </div>
                            </div>
                          </a>
                          <div className="creators-content-div">
                            <h3>
                              <a href="" className="link">
                                Photoshop Brushes
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="materials-creators-slider-box">
                          <a href="" className="creators-img-link">
                            <div className="creators-img-mask-thumb">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={Img5}
                                  className="img-fluid img-responsive"
                                  alt="image"
                                />{' '}
                              </div>
                            </div>
                          </a>
                          <div className="creators-content-div">
                            <h3>
                              <a href="" className="link">
                                Overlays
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="materials-creators-slider-box">
                          <a href="" className="creators-img-link">
                            <div className="creators-img-mask-thumb">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={Img6}
                                  className="img-fluid img-responsive"
                                  alt="image"
                                />{' '}
                              </div>
                            </div>
                          </a>
                          <div className="creators-content-div">
                            <h3>
                              <a href="" className="link">
                                E-Books
                              </a>
                            </h3>
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

export default MaterialsByCreator;
