import React from 'react';
import { Link } from 'react-router-dom';
import UserFooter from '../../pages/User/UserFooter';
import UserHeader from '../../pages/User/UserHeader';
import PaypalLogo from '../../assets/images/icons/paypal.png';

function CardPayment() {
  return (
    <>
      <div id="wrapper" className="wrapper user-home-wrapper">
        <UserHeader />
        <div className="main-middle-area user-main-middle-area main-bg-color">
          <div className="header-footer-with-min-height02">
            <div className="pattern-inner-div pattern-upricing-inner-div mxh-100">
              <section
                className="general-payment-section payment-details-section"
                id="payment-details-section"
              >
                <div className="container container-970">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="general-payment-div">
                        <div className="container-general-center">
                          <div className="heading-div">
                            <div className="heading-inner-div">
                              <h1>Payment Details</h1>
                            </div>
                          </div>

                          <div className="general-payment-root">
                            <div className="general-top">
                              <div className="general-row">
                                <div className="form-general-root">
                                  <div className="row mlr-12">
                                    <div className="col-xl-12 col-lg-12 col-md-12 plr-12">
                                      <div className="form-group">
                                        <label className="label-text">Your name</label>
                                        <div className="form-group-control">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                          />
                                        </div>
                                        <div className="invalid-feedback">
                                          This field is required
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-xl-12 col-lg-12 col-md-12 plr-12">
                                      <div className="form-group credit-card-form-group">
                                        <label className="label-text">Card number</label>
                                        <div className="form-group-control">
                                          <input
                                            type="text"
                                            className="number credit-card-number form-control"
                                            id="card-number"
                                            name="number"
                                            placeholder="XXXX XXXX XXXX XXXX"
                                            data-mask="0000 0000 0000 0000"
                                            autoComplete="off"
                                            maxLength="16"
                                          />
                                          <div className="select-card-dropdown-div">
                                            <div className="dropdown-select-card" id="myDropdown">
                                              <select id="demo-htmlselect">
                                                <option
                                                  value="0"
                                                  selected="selected"
                                                  data-imagesrc="assets/images/icons/card/master-card.svg"
                                                  data-description=""
                                                >
                                                  {' '}
                                                  &nbsp;{' '}
                                                </option>
                                                <option
                                                  value="1"
                                                  data-imagesrc="assets/images/icons/card/Visa-light.svg"
                                                  data-description=""
                                                ></option>
                                                <option
                                                  value="2"
                                                  data-imagesrc="assets/images/icons/card/Cirrus-light.svg"
                                                  data-description=""
                                                ></option>
                                                <option
                                                  value="3"
                                                  data-imagesrc="assets/images/icons/card/Maestro-light.svg"
                                                  data-description=""
                                                ></option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="invalid-feedback">
                                          This field is required
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 plr-12">
                                      <div className="form-group">
                                        <label className="label-text">Expiry Date</label>
                                        <div className="form-group-control">
                                          <input
                                            className="number month-number form-control"
                                            type="text"
                                            id="month-number"
                                            name="number"
                                            placeholder=""
                                            data-mask="00/00"
                                            autoComplete="off"
                                            maxLength="5"
                                          />
                                        </div>
                                        <div className="invalid-feedback">
                                          This field is required
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 plr-12">
                                      <div className="form-group">
                                        <label className="label-text">CVV</label>
                                        <div className="form-group-control">
                                          <input
                                            type="text"
                                            className="form-control cvv-code"
                                            placeholder=""
                                            id="cvv"
                                            maxLength="3"
                                            data-mask="000"
                                            autoComplete="off"
                                          />
                                        </div>
                                        <div className="invalid-feedback">
                                          This field is required
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-xl-12 col-lg-12 col-md-12 plr-12">
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="remember-me-card"
                                          name="example1"
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="remember-me-card"
                                        >
                                          Remember this card
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="general-bottom">
                              <div className="general-btn-div-row">
                                <div className="general-btn-div-left">
                                  <Link to="/paypal" className="btn btn-primary-white-py mh-btn55">
                                    <img src={PaypalLogo} className="img-fluid" alt="img" />
                                  </Link>
                                </div>
                                <div className="general-btn-div-right">
                                  <Link
                                    to="/book-seat"
                                    className="btn btn-primary-outline btn-primary-color-02 mh-btn55 btn-black-back mr-24"
                                  >
                                    <span className="text">Back</span>
                                  </Link>
                                  <Link
                                    to="/success"
                                    className="btn btn-common-primary mh-btn55 btn-book"
                                  >
                                    {' '}
                                    Pay Now{' '}
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
              </section>
            </div>
          </div>
        </div>
        <UserFooter />
      </div>
    </>
  );
}

export default CardPayment;
