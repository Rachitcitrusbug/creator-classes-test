import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { UserCreators } from '../../api/userCreatorsApi';
import { CreatorProfileDetails } from '../../api/creatorProfileDetailsApi';
import { creatorDetails } from '../../redux/Actions/CreatorDetailsAction';
import Creator1 from '../../assets/images/creators/creators1.jpg';

function MeetTheCreators(props) {
  const history = useHistory();
  const authToken = localStorage.getItem('token');
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
                const data = {
                  id: result.data.id,
                  email: result.data.email,
                  first_name: result.data.first_name,
                  last_name: result.data.last_name,
                  username: result.data.username,
                  profile_image: result.data.profile_image,
                  description: result.data.description,
                  country_details: result.data.country_details,
                  key_skill: result.data.key_skill,
                  other_skills: result.data.other_skills,
                  instagram_url: result.data.instagram_url,
                  youtube_url: result.data.youtube_url,
                  facebook_url: result.data.facebook_url,
                  creator_website_url: result.data.creator_website_url,
                  total_rating: result.data.total_rating,
                  creator_reviews: result.data.creator_reviews,
                  affiliation_link: result.data.affiliation_link,
                  is_fav: result.data.is_fav,
                  country: result.data.country,
                };
                props.creatorDetails(data);
                history.push('/creator');
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

  const handleClick = () => {
    history.push('/login');
  };

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
                    {creatorData && creatorData.length > 0 && (
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
                                className="creators-img-link"
                                onClick={
                                  authToken ? () => handleCreatorDetails(obj.id) : handleClick
                                }
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
                                    className="link"
                                    onClick={
                                      authToken ? () => handleCreatorDetails(obj.id) : handleClick
                                    }
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

const mapStateToProps = (state) => {
  return {
    email: state.email,
    first_name: state.first_name,
    last_name: state.last_name,
    username: state.username,
    profile_image: state.profile_image,
    description: state.description,
    country_details: state.country_details,
    key_skill: state.key_skill,
    other_skills: state.other_skills,
    instagram_url: state.instagram_url,
    youtube_url: state.youtube_url,
    facebook_url: state.facebook_url,
    creator_website_url: state.creator_website_url,
    total_rating: state.total_rating,
    creator_reviews: state.creator_reviews,
    affiliation_link: state.affiliation_link,
    is_fav: state.is_fav,
    country: state.country,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    creatorDetails: (data) => dispatch(creatorDetails(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetTheCreators);

MeetTheCreators.propTypes = {
  creatorDetails: PropTypes.object,
};
