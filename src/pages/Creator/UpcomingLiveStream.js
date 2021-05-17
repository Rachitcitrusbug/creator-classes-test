import React from "react";
import Live1 from "../../assets/images/live-streams/ls-image-01.jpg";
import Live2 from "../../assets/images/live-streams/ls-image-02.jpg";
import Creator3 from "../../assets/images/creators/creators3.jpg";

function UpcomingLiveStream() {
  return (
    <>
      <section
        className="upcoming-live-streams-section"
        id="upcoming-live-streams-section"
      >
        <div className="upcoming-live-streams-div">
          <div className="heading-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="heading-inner-div">
                    <h2>Upcoming live streams</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="upcoming-live-streams-slider-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="owl-slider-main-slider">
                    <div
                      className="owl-carousel owl-theme upcoming-live-streams-owl"
                      id="upcoming-live-streams-owl"
                    >
                      <div className="item">
                        <div className="live-streams-img-slider-box">
                          <div className="live-streams-img-thumb">
                            <div className="img-thumb">
                              <img
                                src={Live1}
                                className="img-fluid img-responsive"
                                alt="image"
                              />
                            </div>
                            <div className="video-overlay-content-div">
                              <div className="video-overlay-content-row">
                                <div className="video-overlay-content-left">
                                  <div className="label-div">
                                    <ul>
                                      <li>
                                        <a href="" className="link link-black">
                                          Photography
                                        </a>
                                      </li>
                                      <li>
                                        <a href="" className="link link-black">
                                          Filmmaking
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="video-overlay-content-right">
                                  <div className="sp-label-div">
                                    <a href="" className="link link-black-sp">
                                      {" "}
                                      <i className="bg-custom-icon video-camera-icon"></i>{" "}
                                      Sneak Peek
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="live-streams-content-div">
                            <div className="live-streams-content-row">
                              <div className="live-streams-content-left">
                                <div className="user-top-box">
                                  <div className="img-thumb">
                                    <img
                                      src={Creator3}
                                      className="img-fluid img-responsive"
                                      alt="testimonials"
                                    />
                                  </div>
                                  <div className="text-content-div">
                                    <h3>
                                      <a href="" className="link">
                                        Vivamus suscipit tortor eget felis
                                        porttitor volutpat Mauris blandit
                                        aliquet elit
                                      </a>
                                    </h3>
                                    <div className="other-info-row-div">
                                      <div className="time-row">
                                        <div className="time-box">
                                          <span className="icon-span">
                                            <i className="bg-custom-icon calendar-time-icon"></i>
                                          </span>
                                          <span className="text">
                                            Sept 12, 9:00 PM EST{" "}
                                            <span className="dot-span">•</span>{" "}
                                            <a href="" className="link">
                                              Michael Gray
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="live-streams-content-right">
                                <div className="book-button-div">
                                  <div className="btn-row">
                                    {" "}
                                    <a
                                      href=""
                                      className="btn btn-common-primary"
                                      data-toggle="modal"
                                      data-target="#login-to-book-modal"
                                    >
                                      {" "}
                                      <i className="bg-custom-icon invoice-icon"></i>{" "}
                                      Book now{" "}
                                    </a>{" "}
                                  </div>
                                  <div className="text-center-row">
                                    <p className="text-italic">
                                      Hurry up! Only few seats are left
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="live-streams-img-slider-box">
                          <div className="live-streams-img-thumb">
                            <div className="img-thumb">
                              <img
                                src={Live2}
                                className="img-fluid img-responsive"
                                alt="image"
                              />
                            </div>
                            <div className="video-overlay-content-div">
                              <div className="video-overlay-content-row">
                                <div className="video-overlay-content-left">
                                  <div className="label-div">
                                    <ul>
                                      <li>
                                        <a href="" className="link link-black">
                                          Photography
                                        </a>
                                      </li>
                                      <li>
                                        <a href="" className="link link-black">
                                          Filmmaking
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="video-overlay-content-right">
                                  <div className="sp-label-div">
                                    <a href="" className="link link-black-sp">
                                      {" "}
                                      <i className="bg-custom-icon video-camera-icon"></i>{" "}
                                      Sneak Peek
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="live-streams-content-div">
                            <div className="live-streams-content-row">
                              <div className="live-streams-content-left">
                                <div className="user-top-box">
                                  <div className="img-thumb">
                                    {" "}
                                    <img
                                      src={Creator3}
                                      className="img-fluid img-responsive"
                                      alt="testimonials"
                                    />{" "}
                                  </div>
                                  <div className="text-content-div">
                                    <h3>
                                      <a href="" className="link">
                                        Vivamus suscipit tortor eget felis
                                        porttitor volutpat Mauris blandit
                                        aliquet elit
                                      </a>
                                    </h3>
                                    <div className="other-info-row-div">
                                      <div className="time-row">
                                        <div className="time-box">
                                          <span className="icon-span">
                                            <i className="bg-custom-icon calendar-time-icon"></i>
                                          </span>
                                          <span className="text">
                                            Sept 12, 9:00 PM EST{" "}
                                            <span className="dot-span">•</span>{" "}
                                            <a href="" className="link">
                                              Michael Gray
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="live-streams-content-right">
                                <div className="book-button-div">
                                  <div className="btn-row">
                                    {" "}
                                    <a
                                      href=""
                                      className="btn btn-common-primary"
                                      data-toggle="modal"
                                      data-target="#login-to-book-modal"
                                    >
                                      {" "}
                                      <i className="bg-custom-icon invoice-icon"></i>{" "}
                                      Book now{" "}
                                    </a>{" "}
                                  </div>
                                  <div className="text-center-row">
                                    <p className="text-italic">
                                      Hurry up! Only few seats are left
                                    </p>
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
      </section>
    </>
  );
}

export default UpcomingLiveStream;
