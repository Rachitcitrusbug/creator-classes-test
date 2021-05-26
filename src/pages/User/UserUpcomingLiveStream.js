import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserLiveStream } from '../../api/userUpcomingLiveStreamApi';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Creator3 from '../../assets/images/creators/creators3.jpg';

function UserUpcomingLiveStream() {
  const [streamData, setStreamData] = useState(undefined);

  const getUserLiveStream = () => {
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
    getUserLiveStream();
  }, []);

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
                            {streamData && streamData.length > 0 && (
                              <OwlCarousel
                                className="owl-carousel owl-theme our-classes-owl"
                                loop={true}
                                items={3.2}
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
                                    items: 3.1,
                                  },
                                  1600: {
                                    items: 4.8,
                                  },
                                }}
                              >
                                {streamData.map((obj, index) => (
                                  <div className="item" key={index}>
                                    <div className="our-video-common-slider-box">
                                      <div className="our-video-img-thumb">
                                        <div className="img-thumb">
                                          {' '}
                                          <img
                                            src={obj.thumbnail_file}
                                            className="img-fluid img-responsive"
                                            alt="image"
                                          />{' '}
                                        </div>
                                      </div>
                                      <div className="our-content-div">
                                        <div className="label-div">
                                          <ul>
                                            {obj.stream_keywords.map((o, i) => (
                                              <li key={i}>
                                                <Link className="link link-black">{o}</Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>

                                        <div className="our-content-row">
                                          <div className="our-content-full">
                                            <h4>
                                              <Link to="">{obj.title}</Link>{' '}
                                            </h4>
                                          </div>

                                          <div className="our-content-row-ls">
                                            <div className="our-content-row-ls-left">
                                              <div className="our-content-left">
                                                <div className="thumb-img">
                                                  <Link to="" className="link">
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
                                                      className="img-fluid user"
                                                      alt="user"
                                                    />
                                                  </Link>
                                                </div>
                                              </div>
                                              <div className="our-content-right">
                                                <h3>
                                                  <Link to="" className="link">
                                                    {obj.creator.full_name}
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
                                                  <span className="text">
                                                    {obj.stream_datetime}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="our-content-bottom-row">
                                          <div className="btn-div-group">
                                            <Link
                                              to="/live-stream"
                                              className="btn btn-primary-outline-icon-text"
                                            >
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
                                ))}
                              </OwlCarousel>
                            )}
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
