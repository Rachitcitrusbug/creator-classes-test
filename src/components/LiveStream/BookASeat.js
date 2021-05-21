import React from 'react';
import { Link } from 'react-router-dom';
import UserFooter from '../../pages/User/UserFooter';
import UserHeader from '../../pages/User/UserHeader';
import Creator3 from '../../assets/images/creators/creators3.jpg';

function BookASeat() {
  return (
    <>
      <div id="wrapper" className="wrapper user-home-wrapper">
        <UserHeader />
        <div className="main-middle-area user-main-middle-area main-bg-color">
          <div className="header-footer-with-min-height02">
            <div className="pattern-inner-div pattern-upricing-inner-div mxh-100">
              <section className="general-book-new-section general-book-a-seat-new-section">
                <div className="container container-970">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="general-book-new-div">
                        <div className="container-general-new-center">
                          <div className="heading-div">
                            <div className="heading-inner-div">
                              <h1>Book a Seat</h1>
                            </div>
                          </div>

                          <div className="general-bk-seat-new-body">
                            <div className="general-bk-seat-new-body-row">
                              <div className="general-bk-seat-new-body-left">
                                <div className="book-seat-user-card-div">
                                  <div className="book-seat-user-card-row">
                                    <div className="user-thumb-img-div">
                                      <div className="img-div">
                                        <img
                                          src={Creator3}
                                          className="img-fluid img-responsive"
                                          alt="creators"
                                        />
                                      </div>
                                    </div>
                                    <div className="text-content-div">
                                      <h3>
                                        <a href="" className="link">
                                          Michael Gray
                                        </a>
                                      </h3>
                                      <p>Flimmaker</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="general-bk-seat-new-body-right">
                                <div className="text-desc-div">
                                  <h2>$20</h2>
                                  <p>
                                    Vivamus suscipit tortor eget felis porttitor volutpat Mauris
                                    blandit aliquet elit
                                  </p>

                                  <div className="time-box">
                                    <div className="time-box-rounded">
                                      <span className="icon-span">
                                        <i className="bg-custom-icon calendar-time-icon-new"></i>
                                      </span>
                                      <span className="text">Sept 12, 9:00 PM EST</span>
                                    </div>
                                  </div>

                                  <div className="button-oto-session-div">
                                    <a href="" className="link-btn">
                                      {' '}
                                      Click here to book one-to-one session{' '}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="general-bottom">
                            <div className="general-btn-div">
                              <Link
                                to="live-stream"
                                className="btn btn-primary-outline btn-primary-color-02 mh-btn55 btn-black-back mr-24"
                              >
                                <span className="text">Back</span>
                              </Link>
                              <Link to="/card" className="btn btn-common-primary mh-btn55 btn-book">
                                {' '}
                                Book{' '}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <UserFooter />
      </div>
    </>
  );
}

export default BookASeat;
