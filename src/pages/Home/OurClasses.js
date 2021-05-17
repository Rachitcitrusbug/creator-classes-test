import React from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import LiveCardImg from "../../assets/images/live-card/img.png";
import LiveCardImg1 from "../../assets/images/live-card/img-1.png";
import LiveCardImg2 from "../../assets/images/live-card/img-2.png";
import LiveCardImg3 from "../../assets/images/live-card/img-3.png";
import Creator3 from "../../assets/images/creators/creators3.jpg";

const optionSelect = [
  { value: "I'm yet to think...", label: "I'm yet to think..." },
  { value: "Option 2", label: "Option 2" },
  { value: "Option 3", label: "Option 3" },
];

function OurClasses() {
  const history = useHistory();
  const handleClassClick = (e) => {
    e.preventDefault();
    history.push("/class");
  };

  return (
    <>
      <section className="our-classes-section" id="our-classes-section">
        <div className="our-classes-div">
          <div className="heading-div">
            <div className="container container-1200">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="heading-inner-div">
                    <div className="heading-title-row">
                      <div className="heading-title-left">
                        <h2>Our Classes</h2>
                      </div>
                      <div className="heading-title-right">
                        <div className="form-group select2-form-group select2-new-group">
                          <div className="select-box select-custom2 select-custom2-general round-12">
                            <Select
                              className="js-select2"
                              id="select-filter"
                              options={optionSelect}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="owl-slider-new-main-div">
            <div className="container container-1200">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="owl-slider-new-main-slider">
                    <div
                      className="owl-carousel owl-theme our-classes-owl"
                      id="our-classes-owl"
                    >
                      <div className="item">
                        <div className="our-video-common-slider-box">
                          <div className="our-video-img-thumb">
                            <div className="img-thumb">
                              {" "}
                              <img
                                src={LiveCardImg}
                                className="img-fluid img-responsive"
                                alt="image"
                              />{" "}
                            </div>
                            <div className="like-box-abs">
                              {" "}
                              <button className="like-button">
                                <span className="like-icon "> </span>
                              </button>{" "}
                            </div>
                            <div className="time-box-abs">
                              {" "}
                              <button className="time-button">
                                {" "}
                                13:47{" "}
                              </button>{" "}
                            </div>
                          </div>
                          <div className="our-content-div">
                            <div className="our-content-row">
                              <div className="our-content-full">
                                <h4>
                                  <a href="" onClick={handleClassClick}>
                                    How to learn photography in an efficient way
                                  </a>{" "}
                                </h4>
                              </div>

                              <div className="our-content-left">
                                <div className="thumb-img">
                                  <a href="#" className="link">
                                    <img
                                      src={Creator3}
                                      className="img-fluid user"
                                      alt="user"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="our-content-right">
                                <h3>
                                  <a href="#" className="link">
                                    Mike Visuals{" "}
                                    <span className="icon-rounded-span check-icon-rounded">
                                      <span className="material-icons">
                                        done
                                      </span>
                                    </span>{" "}
                                  </a>
                                </h3>
                                <p>Visual Expert</p>
                              </div>
                            </div>

                            <div className="our-content-bottom-row">
                              <div className="our-content-bottom-left">
                                <div className="label-div">
                                  <span className="txt-label">Popular</span>
                                </div>
                              </div>
                              <div className="our-content-bottom-right">
                                <h4>
                                  <span className="material-icons">
                                    schedule
                                  </span>{" "}
                                  <span className="txt">
                                    Posted 10 hours ago
                                  </span>{" "}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="our-video-common-slider-box">
                          <div className="our-video-img-thumb">
                            <div className="img-thumb">
                              {" "}
                              <img
                                src={LiveCardImg1}
                                className="img-fluid img-responsive"
                                alt="image"
                              />{" "}
                            </div>
                            <div className="like-box-abs">
                              {" "}
                              <button className="like-button">
                                <span className="like-icon "> </span>
                              </button>{" "}
                            </div>
                            <div className="time-box-abs">
                              {" "}
                              <button className="time-button">
                                {" "}
                                13:47{" "}
                              </button>{" "}
                            </div>
                          </div>
                          <div className="our-content-div">
                            <div className="our-content-row">
                              <div className="our-content-full">
                                <h4>
                                  <a href="" onClick={handleClassClick}>
                                    How to learn photography in an efficient way
                                  </a>{" "}
                                </h4>
                              </div>

                              <div className="our-content-left">
                                <div className="thumb-img">
                                  <a href="#" className="link">
                                    <img
                                      src={Creator3}
                                      className="img-fluid user"
                                      alt="user"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="our-content-right">
                                <h3>
                                  <a href="#" className="link">
                                    Mike Visuals{" "}
                                    <span className="icon-rounded-span check-icon-rounded">
                                      <span className="material-icons">
                                        done
                                      </span>
                                    </span>{" "}
                                  </a>
                                </h3>
                                <p>Visual Expert</p>
                              </div>
                            </div>

                            <div className="our-content-bottom-row">
                              <div className="our-content-bottom-left">
                                <div className="label-div">
                                  <span className="txt-label">Popular</span>
                                </div>
                              </div>
                              <div className="our-content-bottom-right">
                                <h4>
                                  <span className="material-icons">
                                    schedule
                                  </span>{" "}
                                  <span className="txt">
                                    Posted 10 hours ago
                                  </span>{" "}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="our-video-common-slider-box">
                          <div className="our-video-img-thumb">
                            <div className="img-thumb">
                              {" "}
                              <img
                                src={LiveCardImg2}
                                className="img-fluid img-responsive"
                                alt="image"
                              />{" "}
                            </div>
                            <div className="like-box-abs">
                              {" "}
                              <button className="like-button">
                                <span className="like-icon "> </span>
                              </button>{" "}
                            </div>
                            <div className="time-box-abs">
                              {" "}
                              <button className="time-button">
                                {" "}
                                13:47{" "}
                              </button>{" "}
                            </div>
                          </div>
                          <div className="our-content-div">
                            <div className="our-content-row">
                              <div className="our-content-full">
                                <h4>
                                  <a href="" onClick={handleClassClick}>
                                    How to learn photography in an efficient way
                                  </a>{" "}
                                </h4>
                              </div>

                              <div className="our-content-left">
                                <div className="thumb-img">
                                  <a href="#" className="link">
                                    <img
                                      src={Creator3}
                                      className="img-fluid user"
                                      alt="user"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="our-content-right">
                                <h3>
                                  <a href="#" className="link">
                                    Mike Visuals{" "}
                                    <span className="icon-rounded-span check-icon-rounded">
                                      <span className="material-icons">
                                        done
                                      </span>
                                    </span>{" "}
                                  </a>
                                </h3>
                                <p>Visual Expert</p>
                              </div>
                            </div>

                            <div className="our-content-bottom-row">
                              <div className="our-content-bottom-left">
                                <div className="label-div">
                                  <span className="txt-label">Popular</span>
                                </div>
                              </div>
                              <div className="our-content-bottom-right">
                                <h4>
                                  <span className="material-icons">
                                    schedule
                                  </span>{" "}
                                  <span className="txt">
                                    Posted 10 hours ago
                                  </span>{" "}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="our-video-common-slider-box">
                          <div className="our-video-img-thumb">
                            <div className="img-thumb">
                              {" "}
                              <img
                                src={LiveCardImg3}
                                className="img-fluid img-responsive"
                                alt="image"
                              />{" "}
                            </div>
                            <div className="like-box-abs">
                              {" "}
                              <button className="like-button">
                                <span className="like-icon "> </span>
                              </button>{" "}
                            </div>
                            <div className="time-box-abs">
                              {" "}
                              <button className="time-button">
                                {" "}
                                13:47{" "}
                              </button>{" "}
                            </div>
                          </div>
                          <div className="our-content-div">
                            <div className="our-content-row">
                              <div className="our-content-full">
                                <h4>
                                  <a href="" onClick={handleClassClick}>
                                    How to learn photography in an efficient way
                                  </a>{" "}
                                </h4>
                              </div>

                              <div className="our-content-left">
                                <div className="thumb-img">
                                  <a href="#" className="link">
                                    <img
                                      src={Creator3}
                                      className="img-fluid user"
                                      alt="user"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="our-content-right">
                                <h3>
                                  <a href="#" className="link">
                                    Mike Visuals{" "}
                                    <span className="icon-rounded-span check-icon-rounded">
                                      <span className="material-icons">
                                        done
                                      </span>
                                    </span>{" "}
                                  </a>
                                </h3>
                                <p>Visual Expert</p>
                              </div>
                            </div>

                            <div className="our-content-bottom-row">
                              <div className="our-content-bottom-left">
                                <div className="label-div">
                                  <span className="txt-label">Popular</span>
                                </div>
                              </div>
                              <div className="our-content-bottom-right">
                                <h4>
                                  <span className="material-icons">
                                    schedule
                                  </span>{" "}
                                  <span className="txt">
                                    Posted 10 hours ago
                                  </span>{" "}
                                </h4>
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

export default OurClasses;
