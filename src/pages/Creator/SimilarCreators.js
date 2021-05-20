import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Creator1 from '../../assets/images/creators/creators1.jpg';
import Creator2 from '../../assets/images/creators/creators2.jpg';
import Creator4 from '../../assets/images/creators/creators4.jpg';

function SimilarCreators() {
  return (
    <>
      <section className="similar-creators-section" id="similar-creators-section">
        <div className="similar-creators-div">
          <div className="heading-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="heading-inner-div">
                    <h2>Similar creators </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="similar-creators-slider-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="similar-creators-slider">
                    <OwlCarousel
                      className="owl-carousel owl-theme similar-creators-owl-div"
                      id="similar-creators-owl"
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
                          items: 3.0,
                        },
                        1600: {
                          items: 4.8,
                        },
                      }}
                    >
                      <div className="item">
                        <div className="similar-creators-slider-box">
                          <a href="" className="creators-img-link">
                            <div className="creators-img-mask-thumb">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={Creator2}
                                  className="img-fluid img-responsive"
                                  alt="image"
                                />{' '}
                              </div>
                            </div>
                          </a>
                          <div className="creators-content-div">
                            <h3>
                              <a href="" className="link">
                                Mitchell Mullins
                              </a>
                            </h3>
                            <h4>Filmmaker</h4>
                            <div className="star-row-div">
                              <div className="star-left-div">
                                <ul className="star-rating-ul">
                                  <li>
                                    <span className="material-icons star-custom-icon active">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-icons star-custom-icon active">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-icons star-custom-icon active">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-icons star-custom-icon active">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-icons star-custom-icon active">
                                      star
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div className="star-right-div">
                                <span className="text">(99)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="similar-creators-slider-box">
                          <a href="" className="creators-img-link">
                            <div className="creators-img-mask-thumb">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={Creator4}
                                  className="img-fluid img-responsive"
                                  alt="image"
                                />{' '}
                              </div>
                            </div>
                          </a>
                          <div className="creators-content-div">
                            <h3>
                              <a href="" className="link">
                                Nolan Omura
                              </a>
                            </h3>
                            <h4>Filmmaker</h4>
                            <div className="star-row-div">
                              <div className="star-left-div">
                                <ul className="star-rating-ul">
                                  <li>
                                    <span className="material-icons star-custom-icon active">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-icons star-custom-icon active">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-icons star-custom-icon active">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-icons star-custom-icon active">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-icons star-custom-icon active">
                                      star
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div className="star-right-div">
                                <span className="text">(99)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="similar-creators-slider-box">
                          <a href="" className="creators-img-link">
                            <div className="creators-img-mask-thumb">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={Creator1}
                                  className="img-fluid img-responsive"
                                  alt="image"
                                />{' '}
                              </div>
                            </div>
                          </a>
                          <div className="creators-content-div">
                            <h3>
                              <a href="" className="link">
                                Benn Tkalcevic
                              </a>
                            </h3>
                            <h4>Filmmaker</h4>
                            <div className="star-row-div">
                              <div className="star-left-div">
                                <ul className="star-rating-ul">
                                  <li>
                                    <span className="material-icons star-custom-icon active">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-icons star-custom-icon active">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-icons star-custom-icon active">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-icons star-custom-icon active">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-icons star-custom-icon active">
                                      star
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div className="star-right-div">
                                <span className="text">(99)</span>
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

export default SimilarCreators;
