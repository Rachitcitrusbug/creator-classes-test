import React from 'react';
import UserFooter from '../../pages/User/UserFooter';
import UserHeader from '../../pages/User/UserHeader';

function PaypalPayment() {
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
                              <h1>Paypal Login</h1>
                            </div>
                          </div>

                          <div className="general-payment-root">
                            <div className="general-top">
                              <div className="general-row">
                                <div className="form-general-root">
                                  <div className="row mlr-12">
                                    <div className="col-xl-6 col-lg-6 col-md-6 plr-12">
                                      <div className="form-group">
                                        <label className="label-text">Email</label>
                                        <div className="form-group-control">
                                          <input
                                            className="form-control"
                                            type="email"
                                            placeholder=""
                                          />
                                        </div>
                                        <div className="invalid-feedback">
                                          This field is required
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 plr-12">
                                      <div className="form-group">
                                        <label className="label-text">Password</label>
                                        <div className="form-group-control">
                                          <input
                                            className="form-control"
                                            type="password"
                                            placeholder=""
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
                                          Remember me
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="general-bottom">
                              <div className="general-btn-div-row justify-content-end">
                                <div className="general-btn-div-right">
                                  <a
                                    href=""
                                    className="btn btn-common-primary mh-btn55 btn-book disabled"
                                  >
                                    {' '}
                                    Login{' '}
                                  </a>
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

export default PaypalPayment;
