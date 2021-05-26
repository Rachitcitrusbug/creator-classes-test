import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserLiveStream } from '../../api/userUpcomingLiveStreamApi';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Creator3 from '../../assets/images/creators/creators3.jpg';

function UpcomingLiveStream() {
  const [streamData, setStreamData] = useState(undefined);

  const getCreatorLiveStreams = () => {
    try {
      UserLiveStream('', '').then((result) => {
        if (result) {
          switch (result.code) {
            case 200:
              if (result.status == true) {
                setStreamData(result.data);
              }
              break;
            case 400:
              console.log('Bad request.');
              break;
            case 401:
              console.log('Session Is Expired Please Login Again');
              break;
            case 500:
              console.log('Server error.');
              break;
            default:
              console.log(result.message);
              break;
          }
        }
      });
    } catch (err) {
      console.log('Something Went Wrong');
    }
  };

  useEffect(() => {
    getCreatorLiveStreams();
  }, []);

  console.log(streamData);

  return (
    <>
      <section className="upcoming-live-streams-section" id="upcoming-live-streams-section">
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
                    {streamData && streamData.length > 0 && (
                      <OwlCarousel
                        className="owl-carousel owl-theme upcoming-live-streams-owl"
                        id="upcoming-live-streams-owl"
                        loop={true}
                        items={1.3}
                        margin={15}
                        nav={false}
                        dots={false}
                        stagePadding={0}
                        autoplay={true}
                        smartSpeed={2000}
                        responsiveClass={true}
                        responsive={{
                          0: {
                            items: 2,
                            autoplay: true,
                            center: true,
                            margin: 8,
                          },
                          600: {
                            items: 2.3,
                          },
                          1200: {
                            items: 1.3,
                          },
                          1600: {
                            items: 4.8,
                          },
                        }}
                      >
                        {streamData.map((obj, index) => (
                          <div className="item" key={index}>
                            <div className="live-streams-img-slider-box">
                              <div className="live-streams-img-thumb">
                                <div className="img-thumb">
                                  <img
                                    src={obj.thumbnail_file}
                                    className="img-fluid img-responsive"
                                    alt="image"
                                  />
                                </div>
                                <div className="video-overlay-content-div">
                                  <div className="video-overlay-content-row">
                                    <div className="video-overlay-content-left">
                                      <div className="label-div">
                                        <ul>
                                          {obj.stream_keywords.map((o, i) => (
                                            <li key={i}>
                                              <Link className="link link-black">{o}</Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="video-overlay-content-right">
                                      <div className="sp-label-div">
                                        <Link className="link link-black-sp">
                                          {' '}
                                          <i className="bg-custom-icon video-camera-icon"></i> Sneak
                                          Peek
                                        </Link>
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
                                          src={
                                            obj.creator.profile_image == '' ||
                                            obj.creator.profile_image == null ||
                                            obj.creator.profile_image == undefined ||
                                            obj.creator.profile_image ==
                                              'https://myapp-user-uploads154822-dev.s3.amazonaws.com/sample.jpg'
                                              ? Creator3
                                              : obj.creator.profile_image
                                          }
                                          className="img-fluid img-responsive"
                                          alt="testimonials"
                                        />
                                      </div>
                                      <div className="text-content-div">
                                        <h3>
                                          <Link className="link">{obj.title}</Link>
                                        </h3>
                                        <div className="other-info-row-div">
                                          <div className="time-row">
                                            <div className="time-box">
                                              <span className="icon-span">
                                                <i className="bg-custom-icon calendar-time-icon"></i>
                                              </span>
                                              <span className="text">
                                                {obj.stream_datetime}{' '}
                                                <span className="dot-span">•</span>{' '}
                                                <Link className="link">
                                                  {obj.creator.full_name}
                                                </Link>
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
                                        {' '}
                                        <Link
                                          to="/live-stream"
                                          className="btn btn-common-primary"
                                          data-toggle="modal"
                                          data-target="#login-to-book-modal"
                                        >
                                          {' '}
                                          <i className="bg-custom-icon invoice-icon"></i> Book now{' '}
                                        </Link>{' '}
                                      </div>
                                      <div className="text-center-row">
                                        <p className="text-italic">{obj.stream_covers}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </OwlCarousel>
                    )}
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
