import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserClassesSearch } from '../../api/userClassesSearchApi';
import Creator3 from '../../assets/images/creators/creators3.jpg';

function UserPhotography() {
  const [classData, setClassData] = useState(undefined);

  const DesignClasses = () => {
    try {
      UserClassesSearch('', 11).then((result) => {
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

  useEffect(() => {
    DesignClasses();
  }, []);

  return (
    <>
      <div className="our-card-classes-div our-cc-div3 bordertop1">
        <div className="common-heading-div">
          <div className="common-heading-inner-div">
            <div className="common-heading-title-row">
              <div className="common-heading-title-left">
                <h2>Design</h2>
              </div>
              <div className="common-heading-title-right">
                <Link to="" className="btn btn-primary-outline btn-primary-outline-n45">
                  <span className="text">View all</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="common-card-class-feed-div">
          <div className="row">
            {classData &&
              classData.length > 0 &&
              classData.map((obj, index) => (
                <>
                  {index == 0 ? (
                    <div className="col-lg-6 col-md-12 left-big-img-order">
                      <div className="common-feed-card-slider-bx-big">
                        <div className="our-video-img-thumb">
                          <div className="img-thumb">
                            {' '}
                            <img
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
                                <Link to="">{obj.title}</Link>{' '}
                              </h4>
                            </div>
                          </div>

                          <div className="our-content-bottom-row">
                            <div className="our-content-bottom-left">
                              <div className="our-content-left">
                                <div className="thumb-img">
                                  <Link to="" className="link">
                                    <img
                                      src={
                                        obj.creator_profile_image == '' ||
                                        obj.creator_profile_image == null ||
                                        obj.creator_profile_image == undefined ||
                                        obj.creator_profile_image ==
                                          'https://myapp-user-uploads154822-dev.s3.amazonaws.com/sample.jpg'
                                          ? Creator3
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
                                  <Link to="" className="link">
                                    {obj.creator_name}{' '}
                                    <span className="icon-rounded-span check-icon-rounded">
                                      <span className="material-icons">done</span>
                                    </span>{' '}
                                  </Link>
                                </h3>
                                <p>{obj.creator_key_skill}</p>
                              </div>
                            </div>
                            <div className="our-content-bottom-right">
                              <h4>
                                <span className="material-icons">schedule</span>{' '}
                                <span className="txt">
                                  Posted{' '}
                                  {Math.floor((new Date() - Date.parse(obj.created_at)) / 86400000)}{' '}
                                  days ago
                                </span>{' '}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ))}

            <div className="col-lg-6 col-md-12 right-small-img-order">
              {classData &&
                classData.length > 0 &&
                classData.map((obj, index) => (
                  <>
                    {index > 0 ? (
                      <div className="common-feed-card-slider-bx-half-small">
                        <div className="our-video-img-thumb">
                          <div className="img-thumb">
                            {' '}
                            <img
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
                                <Link to="">{obj.title}</Link>{' '}
                              </h4>
                            </div>

                            <div className="our-content-left">
                              <div className="thumb-img">
                                <Link to="" className="link">
                                  <img
                                    src={
                                      obj.creator_profile_image == '' ||
                                      obj.creator_profile_image == null ||
                                      obj.creator_profile_image == undefined ||
                                      obj.creator_profile_image ==
                                        'https://myapp-user-uploads154822-dev.s3.amazonaws.com/sample.jpg'
                                        ? Creator3
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
                                <Link to="" className="link">
                                  {obj.creator_name}{' '}
                                  <span className="icon-rounded-span check-icon-rounded">
                                    <span className="material-icons">done</span>
                                  </span>{' '}
                                </Link>
                              </h3>
                              <p>{obj.creator_key_skill}</p>
                            </div>
                          </div>

                          <div className="our-content-bottom-row">
                            <div className="our-content-bottom-right">
                              <h4>
                                <span className="material-icons">schedule</span>{' '}
                                <span className="txt">
                                  Posted{' '}
                                  {Math.floor((new Date() - Date.parse(obj.created_at)) / 86400000)}{' '}
                                  days ago
                                </span>{' '}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPhotography;
