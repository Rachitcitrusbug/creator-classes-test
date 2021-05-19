import React from 'react';
import { useHistory } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Creator1 from '../../assets/images/creators/creators1.jpg';
import Creator2 from '../../assets/images/creators/creators2.jpg';
import Creator3 from '../../assets/images/creators/creators3.jpg';
import Creator4 from '../../assets/images/creators/creators4.jpg';
import Creator5 from '../../assets/images/creators/creators5.jpg';
import Creator6 from '../../assets/images/creators/creators6.jpg';

function MeetTheCreators() {
  const history = useHistory();
  const handleCreatorClick = (e) => {
    e.preventDefault();
    history.push('/creator');
  };

  return (
    <>
      <section className="meet-the-creators-section" id="meet-the-creators-section">
        <div className="meet-the-creators-div">
          <div className="heading-div">
            <div className="container container-1200">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="heading-inner-div">
                    <h2>Meet The Creators</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="creators-owl-slider-main-div">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="creators-owl-slider-main-slider">
                    <OwlCarousel
                      className="owl-carousel owl-theme meet-the-creators-owl-div owl-loaded owl-drag"
                      id="meet-the-creators-owl"
                      loop
                      margin={15}
                      nav
                    >
                      <div className="item">
                        <div className="creators-img-mask-slider-box">
                          <a href="#" className="creators-img-link" onClick={handleCreatorClick}>
                            <div className="creators-img-mask-thumb">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={Creator1}
                                  className="img-fluid img-responsive"
                                  alt="image"
                                />{' '}
                              </div>
                              <div className="view-details-text">
                                {' '}
                                <p>
                                  <span className="block">View </span>{' '}
                                  <span className="block">Details</span>
                                </p>{' '}
                              </div>
                            </div>
                          </a>
                          <div className="creators-content-div">
                            <h3>
                              <a href="#" className="link">
                                Benn Tkalcevic
                              </a>
                            </h3>
                            <h4>Photographer</h4>
                          </div>
                        </div>

                        <div className="creators-img-mask-slider-box">
                          <a href="#" className="creators-img-link" onClick={handleCreatorClick}>
                            <div className="creators-img-mask-thumb">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={Creator2}
                                  className="img-fluid img-responsive"
                                  alt="image"
                                />{' '}
                              </div>
                              <div className="view-details-text">
                                {' '}
                                <p>
                                  <span className="block">View </span>{' '}
                                  <span className="block">Details</span>
                                </p>{' '}
                              </div>
                            </div>
                          </a>
                          <div className="creators-content-div">
                            <h3>
                              <a href="#" className="link">
                                Mitchell Mullins
                              </a>
                            </h3>
                            <h4>Photographer</h4>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="creators-img-mask-slider-box">
                          <a href="#" className="creators-img-link" onClick={handleCreatorClick}>
                            <div className="creators-img-mask-thumb">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={Creator3}
                                  className="img-fluid img-responsive"
                                  alt="image"
                                />{' '}
                              </div>
                              <div className="view-details-text">
                                {' '}
                                <p>
                                  <span className="block">View </span>{' '}
                                  <span className="block">Details</span>
                                </p>{' '}
                              </div>
                            </div>
                          </a>
                          <div className="creators-content-div">
                            <h3>
                              <a href="#" className="link">
                                Michael Gray
                              </a>
                            </h3>
                            <h4>Photographer</h4>
                          </div>
                        </div>

                        <div className="creators-img-mask-slider-box">
                          <a href="#" className="creators-img-link" onClick={handleCreatorClick}>
                            <div className="creators-img-mask-thumb">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={Creator4}
                                  className="img-fluid img-responsive"
                                  alt="image"
                                />{' '}
                              </div>
                              <div className="view-details-text">
                                {' '}
                                <p>
                                  <span className="block">View </span>{' '}
                                  <span className="block">Details</span>
                                </p>{' '}
                              </div>
                            </div>
                          </a>
                          <div className="creators-content-div">
                            <h3>
                              <a href="#" className="link">
                                Nolan Omura
                              </a>
                            </h3>
                            <h4>Photographer</h4>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="creators-img-mask-slider-box">
                          <a href="#" className="creators-img-link" onClick={handleCreatorClick}>
                            <div className="creators-img-mask-thumb">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={Creator5}
                                  className="img-fluid img-responsive"
                                  alt="image"
                                />{' '}
                              </div>
                              <div className="view-details-text">
                                {' '}
                                <p>
                                  <span className="block">View </span>{' '}
                                  <span className="block">Details</span>
                                </p>{' '}
                              </div>
                            </div>
                          </a>
                          <div className="creators-content-div">
                            <h3>
                              <a href="#" className="link">
                                Keenan Lam
                              </a>
                            </h3>
                            <h4>Photographer</h4>
                          </div>
                        </div>

                        <div className="creators-img-mask-slider-box">
                          <a href="#" className="creators-img-link" onClick={handleCreatorClick}>
                            <div className="creators-img-mask-thumb">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={Creator6}
                                  className="img-fluid img-responsive"
                                  alt="image"
                                />{' '}
                              </div>
                              <div className="view-details-text">
                                {' '}
                                <p>
                                  <span className="block">View </span>{' '}
                                  <span className="block">Details</span>
                                </p>{' '}
                              </div>
                            </div>
                          </a>
                          <div className="creators-content-div">
                            <h3>
                              <a href="#" className="link">
                                Malthe Zimakoff
                              </a>
                            </h3>
                            <h4>Photographer</h4>
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

export default MeetTheCreators;
