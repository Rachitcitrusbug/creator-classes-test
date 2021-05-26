import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CreatorClassesList } from '../../api/creatorClassesApi';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function ClassesByCreator() {
  const id = useSelector((state) => state.creatorDetails.id);
  const first_name = useSelector((state) => state.creatorDetails.first_name);
  const last_name = useSelector((state) => state.creatorDetails.last_name);

  const [classData, setClassData] = useState(undefined);

  const getCreatorClasses = () => {
    try {
      CreatorClassesList(id).then((result) => {
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
    getCreatorClasses();
  }, []);

  return (
    <>
      <section className="classes-by-creator-section" id="classes-by-creator-section">
        <div className="classes-by-creator-div">
          <div className="heading-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="heading-inner-div">
                    <h2>
                      Classes by {first_name} {last_name}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="owl-slider-main-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="owl-slider-main-slider">
                    {classData && classData.length > 0 && (
                      <OwlCarousel
                        className="owl-carousel owl-theme our-classes-owl"
                        id="our-classes-owl"
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
                        {classData.map((obj, index) => (
                          <div className="item" key={index}>
                            <div className="our-video-img-slider-box">
                              <div className="our-video-img-thumb">
                                <div className="img-thumb">
                                  {' '}
                                  <img
                                    src={obj.thumbnail_file}
                                    className="img-fluid img-responsive"
                                    alt="image"
                                  />{' '}
                                </div>
                                <div className="video-button-div">
                                  {' '}
                                  <Link className="video-button-link">
                                    <i className="fa fa-play"></i>
                                  </Link>{' '}
                                </div>
                              </div>
                              <div className="our-content-div">
                                <h3>
                                  <Link className="link">{obj.title}</Link>
                                </h3>
                                <h4>{obj.creator_name}</h4>
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

export default ClassesByCreator;
