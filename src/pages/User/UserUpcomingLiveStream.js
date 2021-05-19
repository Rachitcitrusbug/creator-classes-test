import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Live1 from '../../assets/images/user-home/upcoming-live-streams-01.jpg';
import Creator3 from '../../assets/images/creators/creators3.jpg';

function UserUpcomingLiveStream() {
  return (
    <>
      <section className="upcoming-live-str-section-new" id="upcoming-live-str-section-new">
        <div className="container container-1200">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="upcoming-live-str-div-new">
                <div className="common-heading-div">
                  <div className="common-heading-inner-div">
                    <div className="common-heading-title-row">
                      <div className="common-heading-title-left">
                        <h2>Upcoming Live Streams</h2>
                      </div>
                      <div className="common-heading-title-right">
                        <Link to="" className="btn btn-primary-outline btn-primary-outline-n45">
                          <span className="text">View all</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="upc-streams-slider-new-main-div">
                  <div className="upc-streams-slider-new-root">
                    <div className="container container-1200">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="owl-slider-new-main-slider">
                            <OwlCarousel
                              className="owl-carousel owl-theme our-classes-owl owl-loaded owl-drag"
                              loop
                              margin={15}
                              nav
                            >
                              <div className="item">
                                <div className="our-video-common-slider-box">
                                  <div className="our-video-img-thumb">
                                    <div className="img-thumb">
                                      {' '}
                                      <img
                                        src={Live1}
                                        className="img-fluid img-responsive"
                                        alt="image"
                                      />{' '}
                                    </div>
                                  </div>
                                  <div className="our-content-div">
                                    <div className="label-div">
                                      <ul>
                                        <li>
                                          <Link to="" className="link link-black">
                                            Photography
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="" className="link link-black">
                                            VFX
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="" className="link link-black">
                                            Filmmaking
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>

                                    <div className="our-content-row">
                                      <div className="our-content-full">
                                        <h4>
                                          <Link to="">
                                            Vivamus suscipit tortor eget felis porttitor volutpat
                                            Mauris blandit aliquet elit
                                          </Link>{' '}
                                        </h4>
                                      </div>

                                      <div className="our-content-row-ls">
                                        <div className="our-content-row-ls-left">
                                          <div className="our-content-left">
                                            <div className="thumb-img">
                                              <Link to="" className="link">
                                                <img
                                                  src={Creator3}
                                                  className="img-fluid user"
                                                  alt="user"
                                                />
                                              </Link>
                                            </div>
                                          </div>
                                          <div className="our-content-right">
                                            <h3>
                                              <Link to="" className="link">
                                                Mike Visuals
                                              </Link>
                                            </h3>
                                          </div>
                                        </div>

                                        <div className="our-content-row-ls-right">
                                          <div className="time-row">
                                            <div className="time-box">
                                              <span className="icon-span">
                                                <i className="bg-custom-icon calendar-time-icon-new"></i>
                                              </span>
                                              <span className="text">Sept 12, 9:00 PM EST</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="our-content-bottom-row">
                                      <div className="btn-div-group">
                                        <Link to="" className="btn btn-primary-outline-icon-text">
                                          <span className="icon-span">
                                            <i className="bg-custom-icon invoice-icon-new"></i>
                                          </span>
                                          <span className="text">Book Now</span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="item">
                                <div className="our-video-common-slider-box">
                                  <div className="our-video-img-thumb">
                                    <div className="img-thumb">
                                      {' '}
                                      <img
                                        src={Live1}
                                        className="img-fluid img-responsive"
                                        alt="image"
                                      />{' '}
                                    </div>
                                  </div>
                                  <div className="our-content-div">
                                    <div className="label-div">
                                      <ul>
                                        <li>
                                          <Link to="" className="link link-black">
                                            Photography
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="" className="link link-black">
                                            VFX
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="" className="link link-black">
                                            Filmmaking
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>

                                    <div className="our-content-row">
                                      <div className="our-content-full">
                                        <h4>
                                          <Link to="">
                                            Vivamus suscipit tortor eget felis porttitor volutpat
                                            Mauris blandit aliquet elit
                                          </Link>{' '}
                                        </h4>
                                      </div>

                                      <div className="our-content-row-ls">
                                        <div className="our-content-row-ls-left">
                                          <div className="our-content-left">
                                            <div className="thumb-img">
                                              <Link to="" className="link">
                                                <img
                                                  src={Creator3}
                                                  className="img-fluid user"
                                                  alt="user"
                                                />
                                              </Link>
                                            </div>
                                          </div>
                                          <div className="our-content-right">
                                            <h3>
                                              <Link to="" className="link">
                                                Mike Visuals
                                              </Link>
                                            </h3>
                                          </div>
                                        </div>

                                        <div className="our-content-row-ls-right">
                                          <div className="time-row">
                                            <div className="time-box">
                                              <span className="icon-span">
                                                <i className="bg-custom-icon calendar-time-icon-new"></i>
                                              </span>
                                              <span className="text">Sept 12, 9:00 PM EST</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="our-content-bottom-row">
                                      <div className="btn-div-group">
                                        <Link to="" className="btn btn-primary-outline-icon-text">
                                          <span className="icon-span">
                                            <i className="bg-custom-icon invoice-icon-new"></i>
                                          </span>
                                          <span className="text">Book Now</span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="item">
                                <div className="our-video-common-slider-box">
                                  <div className="our-video-img-thumb">
                                    <div className="img-thumb">
                                      {' '}
                                      <img
                                        src={Live1}
                                        className="img-fluid img-responsive"
                                        alt="image"
                                      />{' '}
                                    </div>
                                  </div>
                                  <div className="our-content-div">
                                    <div className="label-div">
                                      <ul>
                                        <li>
                                          <Link to="" className="link link-black">
                                            Photography
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="" className="link link-black">
                                            VFX
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="" className="link link-black">
                                            Filmmaking
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>

                                    <div className="our-content-row">
                                      <div className="our-content-full">
                                        <h4>
                                          <Link to="">
                                            Vivamus suscipit tortor eget felis porttitor volutpat
                                            Mauris blandit aliquet elit
                                          </Link>{' '}
                                        </h4>
                                      </div>

                                      <div className="our-content-row-ls">
                                        <div className="our-content-row-ls-left">
                                          <div className="our-content-left">
                                            <div className="thumb-img">
                                              <Link to="" className="link">
                                                <img
                                                  src={Creator3}
                                                  className="img-fluid user"
                                                  alt="user"
                                                />
                                              </Link>
                                            </div>
                                          </div>
                                          <div className="our-content-right">
                                            <h3>
                                              <Link to="" className="link">
                                                Mike Visuals
                                              </Link>
                                            </h3>
                                          </div>
                                        </div>

                                        <div className="our-content-row-ls-right">
                                          <div className="time-row">
                                            <div className="time-box">
                                              <span className="icon-span">
                                                <i className="bg-custom-icon calendar-time-icon-new"></i>
                                              </span>
                                              <span className="text">Sept 12, 9:00 PM EST</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="our-content-bottom-row">
                                      <div className="btn-div-group">
                                        <Link to="" className="btn btn-primary-outline-icon-text">
                                          <span className="icon-span">
                                            <i className="bg-custom-icon invoice-icon-new"></i>
                                          </span>
                                          <span className="text">Book Now</span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="item">
                                <div className="our-video-common-slider-box">
                                  <div className="our-video-img-thumb">
                                    <div className="img-thumb">
                                      {' '}
                                      <img
                                        src={Live1}
                                        className="img-fluid img-responsive"
                                        alt="image"
                                      />{' '}
                                    </div>
                                  </div>
                                  <div className="our-content-div">
                                    <div className="label-div">
                                      <ul>
                                        <li>
                                          <Link to="" className="link link-black">
                                            Photography
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="" className="link link-black">
                                            VFX
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="" className="link link-black">
                                            Filmmaking
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>

                                    <div className="our-content-row">
                                      <div className="our-content-full">
                                        <h4>
                                          <Link to="">
                                            Vivamus suscipit tortor eget felis porttitor volutpat
                                            Mauris blandit aliquet elit
                                          </Link>{' '}
                                        </h4>
                                      </div>

                                      <div className="our-content-row-ls">
                                        <div className="our-content-row-ls-left">
                                          <div className="our-content-left">
                                            <div className="thumb-img">
                                              <Link to="" className="link">
                                                <img
                                                  src={Creator3}
                                                  className="img-fluid user"
                                                  alt="user"
                                                />
                                              </Link>
                                            </div>
                                          </div>
                                          <div className="our-content-right">
                                            <h3>
                                              <Link to="" className="link">
                                                Mike Visuals
                                              </Link>
                                            </h3>
                                          </div>
                                        </div>

                                        <div className="our-content-row-ls-right">
                                          <div className="time-row">
                                            <div className="time-box">
                                              <span className="icon-span">
                                                <i className="bg-custom-icon calendar-time-icon-new"></i>
                                              </span>
                                              <span className="text">Sept 12, 9:00 PM EST</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="our-content-bottom-row">
                                      <div className="btn-div-group">
                                        <Link to="" className="btn btn-primary-outline-icon-text">
                                          <span className="icon-span">
                                            <i className="bg-custom-icon invoice-icon-new"></i>
                                          </span>
                                          <span className="text">Book Now</span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="item">
                                <div className="our-video-common-slider-box">
                                  <div className="our-video-img-thumb">
                                    <div className="img-thumb">
                                      {' '}
                                      <img
                                        src={Live1}
                                        className="img-fluid img-responsive"
                                        alt="image"
                                      />{' '}
                                    </div>
                                  </div>
                                  <div className="our-content-div">
                                    <div className="label-div">
                                      <ul>
                                        <li>
                                          <Link to="" className="link link-black">
                                            Photography
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="" className="link link-black">
                                            VFX
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="" className="link link-black">
                                            Filmmaking
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>

                                    <div className="our-content-row">
                                      <div className="our-content-full">
                                        <h4>
                                          <Link to="">
                                            Vivamus suscipit tortor eget felis porttitor volutpat
                                            Mauris blandit aliquet elit
                                          </Link>{' '}
                                        </h4>
                                      </div>

                                      <div className="our-content-row-ls">
                                        <div className="our-content-row-ls-left">
                                          <div className="our-content-left">
                                            <div className="thumb-img">
                                              <Link to="" className="link">
                                                <img
                                                  src={Creator3}
                                                  className="img-fluid user"
                                                  alt="user"
                                                />
                                              </Link>
                                            </div>
                                          </div>
                                          <div className="our-content-right">
                                            <h3>
                                              <Link to="" className="link">
                                                Mike Visuals
                                              </Link>
                                            </h3>
                                          </div>
                                        </div>

                                        <div className="our-content-row-ls-right">
                                          <div className="time-row">
                                            <div className="time-box">
                                              <span className="icon-span">
                                                <i className="bg-custom-icon calendar-time-icon-new"></i>
                                              </span>
                                              <span className="text">Sept 12, 9:00 PM EST</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="our-content-bottom-row">
                                      <div className="btn-div-group">
                                        <Link to="" className="btn btn-primary-outline-icon-text">
                                          <span className="icon-span">
                                            <i className="bg-custom-icon invoice-icon-new"></i>
                                          </span>
                                          <span className="text">Book Now</span>
                                        </Link>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserUpcomingLiveStream;
