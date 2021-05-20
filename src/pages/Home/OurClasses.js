import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { UserClasses } from '../../api/userClassesApi';
import { UserClassFilterKeywords } from '../../api/userClassFilterKeywordsApi';
import Profile from '../../assets/images/profile.png';

function OurClasses() {
  const authToken = localStorage.getItem('token');
  const [classData, setClassData] = useState(undefined);
  const [keywordData, setKeywordData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option.value);
  };

  const getUserClasses = () => {
    try {
      UserClasses(selectedOption).then((result) => {
        if (result) {
          switch (result.code) {
            case 200:
              if (result.status == true) {
                setClassData(result.data);
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

  const getUserClassFilterKeywords = () => {
    try {
      UserClassFilterKeywords().then((result) => {
        if (result) {
          switch (result.code) {
            case 200:
              if (result.status == true) {
                {
                  let filterKeyword = [];
                  result.data.length > 0 &&
                    result.data.map((obj) =>
                      filterKeyword.push({
                        value: obj.id,
                        label: obj.keyword,
                      }),
                    );
                  setKeywordData(filterKeyword);
                }
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
    getUserClasses();
  }, [selectedOption]);

  useEffect(() => {
    getUserClassFilterKeywords();
  }, []);

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
                              options={keywordData}
                              onChange={handleOptionChange}
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
                    {classData && classData.length > 0 && (
                      <OwlCarousel
                        className="owl-carousel owl-theme our-classes-owl"
                        id="our-classes-owl"
                        loop={classData.length >= 5 ? true : false}
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
                        {classData.map((obj, index) => (
                          <div className="item" key={index}>
                            <div className="our-video-common-slider-box">
                              <div className="our-video-img-thumb">
                                <div className="img-thumb">
                                  {' '}
                                  <img
                                    key={index}
                                    src={obj.thumbnail_file}
                                    className="img-fluid img-responsive"
                                    alt="image"
                                  />{' '}
                                </div>
                                <div className="like-box-abs">
                                  {' '}
                                  <button className="like-button">
                                    <span className="like-icon "> </span>
                                  </button>{' '}
                                </div>
                              </div>
                              <div className="our-content-div">
                                <div className="our-content-row">
                                  <div className="our-content-full">
                                    <h4>
                                      <Link to={authToken ? '/class' : '/login'}>{obj.title}</Link>{' '}
                                    </h4>
                                  </div>

                                  <div className="our-content-left">
                                    <div className="thumb-img">
                                      <Link
                                        to={authToken ? '/user-home' : '/login'}
                                        className="link"
                                      >
                                        <img
                                          src={
                                            obj.creator_profile_image == '' ||
                                            obj.creator_profile_image == null ||
                                            obj.creator_profile_image == undefined ||
                                            obj.creator_profile_image ==
                                              'https://myapp-user-uploads154822-dev.s3.amazonaws.com/sample.jpg'
                                              ? Profile
                                              : obj.creator_profile_image
                                          }
                                          className="img-fluid user"
                                          alt="user"
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="our-content-right">
                                    <h3>
                                      <Link to={authToken ? '/creator' : '/login'} className="link">
                                        {obj.creator_name}{' '}
                                        <span className="icon-rounded-span check-icon-rounded">
                                          <span className="material-icons">done</span>
                                        </span>{' '}
                                      </Link>
                                    </h3>
                                  </div>
                                </div>

                                <div className="our-content-bottom-row">
                                  <div className="our-content-bottom-right">
                                    <h4>
                                      <span className="material-icons">schedule</span>{' '}
                                      <span className="txt">
                                        Posted{' '}
                                        {Math.floor(
                                          (new Date() - Date.parse(obj.created_at)) / 86400000,
                                        )}{' '}
                                        days ago
                                      </span>{' '}
                                    </h4>
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

export default OurClasses;
