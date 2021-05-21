import React from 'react';
import { Link } from 'react-router-dom';
import UserFooter from '../../pages/User/UserFooter';
import UserHeader from '../../pages/User/UserHeader';
import SuccessImg from '../../assets/images/character-successfull.png';

function PaymentSuccessfull() {
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
                          <div className="heading-div mb-0">
                            <div className="heading-inner-div">
                              <h5>Congratulations !</h5>
                              <h1>Payment Sucessfull</h1>
                            </div>
                          </div>

                          <div className="general-message-root">
                            <div className="general-message-inner-div">
                              <div className="gen-mess-thumb-div">
                                <img src={SuccessImg} className="img-fluid img-char" alt="img" />
                              </div>

                              <div className="text-content-div">
                                <div className="prag-div">
                                  <p>Your payment was successfull.</p>
                                </div>
                                <div className="btn-div">
                                  <Link
                                    to="/user-home"
                                    className="btn btn-common-primary mh-btn55 btn-back-to-home"
                                  >
                                    {' '}
                                    Back to Homepage{' '}
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

export default PaymentSuccessfull;
