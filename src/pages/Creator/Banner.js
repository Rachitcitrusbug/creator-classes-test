import React from 'react';
import { useSelector } from 'react-redux';

function Banner() {
  const first_name = useSelector((state) => state.creatorDetails.first_name);
  const last_name = useSelector((state) => state.creatorDetails.last_name);
  const key_skill = useSelector((state) => state.creatorDetails.key_skill);
  const total_rating = useSelector((state) => state.creatorDetails.total_rating);
  const instagram_url = useSelector((state) => state.creatorDetails.instagram_url);
  const youtube_url = useSelector((state) => state.creatorDetails.youtube_url);
  const facebook_url = useSelector((state) => state.creatorDetails.facebook_url);

  return (
    <>
      <section className="main-inner-banner-section" id="main-inner-banner-section">
        <div className="main-inner-banner-div">
          <div className="content-banner-root">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="content-banner">
                    <div className="text-content">
                      <h2>
                        {first_name} {last_name}
                      </h2>
                      <p>{key_skill}</p>
                      <div className="star-row-div">
                        <div className="star-left-div">
                          <ul className="star-rating-ul">
                            <li>
                              <span className="material-icons star-custom-icon active">star</span>
                            </li>
                            <li>
                              <span className="material-icons star-custom-icon active">star</span>
                            </li>
                            <li>
                              <span className="material-icons star-custom-icon active">star</span>
                            </li>
                            <li>
                              <span className="material-icons star-custom-icon active">star</span>
                            </li>
                            <li>
                              <span className="material-icons star-custom-icon active">star</span>
                            </li>
                          </ul>
                        </div>
                        <div className="star-right-div">
                          <span className="text">({total_rating})</span>
                        </div>
                      </div>
                    </div>

                    <div className="social-banner-div">
                      <ul className="social-list-ul">
                        <li>
                          {' '}
                          <a href={instagram_url} className="link" target="_blank" rel="noreferrer">
                            {' '}
                            <i className="fab fa-instagram"></i>{' '}
                          </a>{' '}
                        </li>
                        <li>
                          {' '}
                          <a href={youtube_url} className="link" target="_blank" rel="noreferrer">
                            {' '}
                            <i className="fab fa-youtube"></i>{' '}
                          </a>{' '}
                        </li>
                        <li>
                          {' '}
                          <a href={facebook_url} className="link" target="_blank" rel="noreferrer">
                            {' '}
                            <i className="fab fa-facebook"></i>{' '}
                          </a>{' '}
                        </li>
                      </ul>
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

export default Banner;
