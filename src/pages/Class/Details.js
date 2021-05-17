import React from "react";
import Live from "../../assets/images/live-streams/ls-image-02.jpg";
import Creator from "../../assets/images/creators/creators3.jpg";

function Details() {
  return (
    <>
      <section
        className="user-class-details-section"
        id="user-class-details-section"
      >
        <div className="user-class-details-div">
          <div className="container container-800">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="heading-div">
                  <div className="heading-inner-div">
                    <h2>
                      Vivamus suscipit tortor eget felis porttitor volutpat
                      Mauris blandit aliquet elit
                    </h2>
                  </div>
                </div>

                <div className="cc-details-root">
                  <div className="cc-streams-details-box">
                    <div className="cc-streams-img-thumb">
                      <div className="img-thumb">
                        {" "}
                        <img
                          src={Live}
                          className="img-fluid img-responsive"
                          alt="image"
                        />{" "}
                      </div>
                      <div className="video-overlay-content-div">
                        <div className="video-overlay-content-center">
                          <div className="sp-label-div">
                            <a href="#" className="link link-video-sp-round">
                              {" "}
                              <span className="material-icons">
                                play_arrow
                              </span>{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cc-streams-content-div">
                      <div className="cc-streams-content-row">
                        <div className="cc-streams-content-left">
                          <div className="user-top-box">
                            <div className="img-thumb">
                              {" "}
                              <img
                                src={Creator}
                                className="img-fluid img-responsive"
                                alt="testimonials"
                              />{" "}
                            </div>
                            <div className="text-content-div">
                              <h2>
                                <a href="#" className="link">
                                  By Michael Gray
                                </a>
                              </h2>
                              <h3>Posted 2 days ago</h3>
                            </div>
                          </div>

                          <div className="label-div">
                            <ul>
                              <li>
                                <a href="#" className="link link-black">
                                  Photography
                                </a>
                              </li>
                              <li>
                                <a href="#" className="link link-black">
                                  Filmmaking
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="cc-streams-content-right">
                          <div className="cc-streams-reminder-div">
                            <a href="#" className="link link-fav">
                              {" "}
                              <span className="material-icons">
                                favorite_border
                              </span>{" "}
                              Favourite
                            </a>
                          </div>
                        </div>

                        <div className="cc-streams-card-info">
                          <div className="ques-box-row">
                            <div className="ques-box">
                              <div className="heading-title">
                                <h3>What you will learn?</h3>
                              </div>
                              <div className="desc-inner-box">
                                <ul className="check-list-ul">
                                  <li className="width-50">
                                    Color, Light, and Design Techniques
                                  </li>
                                  <li className="width-50">
                                    Understanding Composition
                                  </li>
                                  <li className="width-50">
                                    Capturing Motion in Photos
                                  </li>
                                  <li className="width-50">
                                    Setting Up Photo Studio Lighting
                                  </li>
                                </ul>
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

export default Details;
