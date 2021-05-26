import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SimilarCreatorList } from '../../api/similarCreatorsApi';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Creator1 from '../../assets/images/creators/creators1.jpg';

function SimilarCreators() {
  const [creatorData, setCreatorData] = useState(undefined);

  const getSimilarCreators = () => {
    try {
      SimilarCreatorList().then((result) => {
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
    getSimilarCreators();
  }, []);

  return (
    <>
      <section className="similar-creators-section" id="similar-creators-section">
        <div className="similar-creators-div">
          <div className="heading-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="heading-inner-div">
                    <h2>Similar creators </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="similar-creators-slider-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="similar-creators-slider">
                    {creatorData && creatorData.length > 0 && (
                      <OwlCarousel
                        className="owl-carousel owl-theme similar-creators-owl-div"
                        id="similar-creators-owl"
                        loop={true}
                        items={3.1}
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
                            items: 3.0,
                          },
                          1600: {
                            items: 4.8,
                          },
                        }}
                      >
                        {creatorData.map((obj, index) => (
                          <div className="item" key={index}>
                            <div className="similar-creators-slider-box">
                              <Link to="" className="creators-img-link">
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
                                </div>
                              </Link>
                              <div className="creators-content-div">
                                <h3>
                                  <Link to="" className="link">
                                    {obj.full_name}
                                  </Link>
                                </h3>
                                <h4>{obj.key_skill}</h4>
                                <div className="star-row-div">
                                  <div className="star-left-div">
                                    <ul className="star-rating-ul">
                                      <li>
                                        <span className="material-icons star-custom-icon active">
                                          star
                                        </span>
                                      </li>
                                      <li>
                                        <span className="material-icons star-custom-icon active">
                                          star
                                        </span>
                                      </li>
                                      <li>
                                        <span className="material-icons star-custom-icon active">
                                          star
                                        </span>
                                      </li>
                                      <li>
                                        <span className="material-icons star-custom-icon active">
                                          star
                                        </span>
                                      </li>
                                      <li>
                                        <span className="material-icons star-custom-icon active">
                                          star
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="star-right-div">
                                    <span className="text">(99)</span>
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

export default SimilarCreators;
