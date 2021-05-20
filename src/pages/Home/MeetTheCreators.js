import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { UserCreators } from '../../api/userCreatorsApi';
import { CreatorProfileDetails } from '../../api/creatorProfileDetailsApi';
import Creator1 from '../../assets/images/creators/creators1.jpg';

function MeetTheCreators() {
  const history = useHistory();
  // const authToken = localStorage.getItem('token');
  const [creatorData, setCreatorData] = useState([]);

  const getUserCreators = () => {
    try {
      UserCreators().then((result) => {
        if (result) {
          switch (result.code) {
            case 200:
              if (result.status == true) {
                setCreatorData(result.data);
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
    getUserCreators();
  }, []);

  function handleCreatorDetails(id) {
    try {
      CreatorProfileDetails(id).then((result) => {
        if (result) {
          switch (result.code) {
            case 200:
              if (result.status == true) {
                history.push('/creator', { creator: result.data });
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
  }

  return (
    <>
      <section className="meet-the-creators-section" id="meet-the-creators-section">
        <div className="meet-the-creators-div">
          <div className="heading-div">
            <div className="container container-1200">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="heading-inner-div">
                    <h2>Meet The Creators</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="creators-owl-slider-main-div">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="creators-owl-slider-main-slider">
                    {creatorData.length > 0 && (
                      <OwlCarousel
                        className="owl-carousel owl-theme meet-the-creators-owl-div"
                        id="meet-the-creators-owl"
                        loop={creatorData.length >= 5 ? true : false}
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
                        {creatorData.map((obj, index) => (
                          <div className="item" key={index}>
                            <div className="creators-img-mask-slider-box">
                              <Link
                                // to={authToken ? '/creator' : '/login'}
                                className="creators-img-link"
                                onClick={() => handleCreatorDetails(obj.id)}
                              >
                                <div className="creators-img-mask-thumb">
                                  <div className="img-thumb">
                                    {' '}
                                    <img
                                      src={
                                        obj.profile_image == '' ||
                                        obj.profile_image == null ||
                                        obj.profile_image == undefined ||
                                        obj.profile_image ==
                                          'https://myapp-user-uploads154822-dev.s3.amazonaws.com/sample.jpg'
                                          ? Creator1
                                          : obj.profile_image
                                      }
                                      className="img-fluid img-responsive"
                                      alt="image"
                                    />{' '}
                                  </div>
                                  <div className="view-details-text">
                                    {' '}
                                    <p>
                                      <span className="block">View </span>{' '}
                                      <span className="block">Details</span>
                                    </p>{' '}
                                  </div>
                                </div>
                              </Link>
                              <div className="creators-content-div">
                                <h3>
                                  <Link
                                    // to={authToken ? '/creator' : '/login'}
                                    className="link"
                                    onClick={() => handleCreatorDetails(obj.id)}
                                  >
                                    {obj.full_name}
                                  </Link>
                                </h3>
                                <h4>{obj.key_skill}</h4>
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

export default MeetTheCreators;
