import React from "react";
import User from "../../assets/images/user-02.jpg";

function Notifications() {
  return (
    <>
      <div
        className="modal right right-slider-modal fade"
        id="notifications-modal"
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  {" "}
                  <i className="fe fe-x close-icon-x"></i>{" "}
                </span>
              </button>
            </div>

            <div className="modal-body">
              <div className="common-modal-body login-to-book-body">
                <div className="common-header-div">
                  <div className="title-heading-div nt-heading-div">
                    <h2>Notifications</h2>
                  </div>
                </div>
                <div className="common-body-div">
                  <div className="common-body-inner-div">
                    <div className="notifications-common-div">
                      <div className="notifications-common-inner">
                        <div className="notifications-listing-div">
                          <div className="notifications-box">
                            <div className="notifications-row">
                              <div className="nt-left">
                                <div className="thumb-div">
                                  <img
                                    src={User}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="nt-right">
                                <div className="text-desc">
                                  <h3>
                                    {" "}
                                    <a href="#" className="link">
                                      Your seat for michael gray’s stream has
                                      been booked
                                    </a>
                                  </h3>
                                  <span className="time-span">17:05</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="notifications-box">
                            <div className="notifications-row">
                              <div className="nt-left">
                                <div className="thumb-div">
                                  <img
                                    src={User}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="nt-right">
                                <div className="text-desc">
                                  <h3>
                                    {" "}
                                    <a href="#" className="link">
                                      Your seat for michael gray’s stream has
                                      been booked
                                    </a>
                                  </h3>
                                  <span className="time-span">17:05</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="notifications-box">
                            <div className="notifications-row">
                              <div className="nt-left">
                                <div className="thumb-div">
                                  <img
                                    src={User}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="nt-right">
                                <div className="text-desc">
                                  <h3>
                                    {" "}
                                    <a href="#" className="link">
                                      Your seat for michael gray’s stream has
                                      been booked
                                    </a>
                                  </h3>
                                  <span className="time-span">17:05</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="notifications-box">
                            <div className="notifications-row">
                              <div className="nt-left">
                                <div className="thumb-div">
                                  <img
                                    src={User}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="nt-right">
                                <div className="text-desc">
                                  <h3>
                                    {" "}
                                    <a href="#" className="link">
                                      Your seat for michael gray’s stream has
                                      been booked
                                    </a>
                                  </h3>
                                  <span className="time-span">17:05</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="notifications-box">
                            <div className="notifications-row">
                              <div className="nt-left">
                                <div className="thumb-div">
                                  <img
                                    src={User}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="nt-right">
                                <div className="text-desc">
                                  <h3>
                                    {" "}
                                    <a href="#" className="link">
                                      Your seat for michael gray’s stream has
                                      been booked
                                    </a>
                                  </h3>
                                  <span className="time-span">17:05</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="notifications-box">
                            <div className="notifications-row">
                              <div className="nt-left">
                                <div className="thumb-div">
                                  <img
                                    src={User}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="nt-right">
                                <div className="text-desc">
                                  <h3>
                                    {" "}
                                    <a href="#" className="link">
                                      Your seat for michael gray’s stream has
                                      been booked
                                    </a>
                                  </h3>
                                  <span className="time-span">17:05</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="notifications-box">
                            <div className="notifications-row">
                              <div className="nt-left">
                                <div className="thumb-div">
                                  <img
                                    src={User}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="nt-right">
                                <div className="text-desc">
                                  <h3>
                                    {" "}
                                    <a href="#" className="link">
                                      Your seat for michael gray’s stream has
                                      been booked
                                    </a>
                                  </h3>
                                  <span className="time-span">17:05</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
