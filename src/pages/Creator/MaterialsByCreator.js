import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CreatorMaterialsList } from '../../api/creatorMaterialsApi';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function MaterialsByCreator() {
  const id = useSelector((state) => state.creatorDetails.id);
  const first_name = useSelector((state) => state.creatorDetails.first_name);
  const last_name = useSelector((state) => state.creatorDetails.last_name);

  const [materialData, setMaterialData] = useState(undefined);

  const getCreatorMaterials = () => {
    try {
      CreatorMaterialsList(id).then((result) => {
        if (result) {
          switch (result.code) {
            case 200:
              if (result.status == true) {
                setMaterialData(result.data);
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
    getCreatorMaterials();
  }, []);

  return (
    <>
      <section className="materials-creators-section" id="materials-creators-section">
        <div className="materials-creators-div">
          <div className="heading-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="heading-inner-div">
                    <div className="heading-title-row">
                      <div className="heading-title-left">
                        <h2>
                          Materials by {first_name} {last_name}
                        </h2>
                      </div>
                      <div className="heading-title-right">
                        <div className="link-div">
                          {' '}
                          <Link className="link view-all-link">View All</Link>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="materials-creators-slider-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="materials-creators-slider">
                    {materialData && materialData.length > 0 && (
                      <OwlCarousel
                        className="owl-carousel owl-theme materials-creators-owl-div"
                        id="materials-creators-owl"
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
                            items: 3,
                          },
                          1600: {
                            items: 4.8,
                          },
                        }}
                      >
                        {materialData.map((obj, index) => (
                          <div className="item" key={index}>
                            <div className="materials-creators-slider-box">
                              <Link to="" className="creators-img-link">
                                <div className="creators-img-mask-thumb">
                                  <div className="img-thumb">
                                    {' '}
                                    <img
                                      src={obj.thumbnail_file}
                                      className="img-fluid img-responsive"
                                      alt="image"
                                    />{' '}
                                  </div>
                                </div>
                              </Link>
                              <div className="creators-content-div">
                                <h3>
                                  <Link to="" className="link">
                                    {obj.title}
                                  </Link>
                                </h3>
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

export default MaterialsByCreator;
