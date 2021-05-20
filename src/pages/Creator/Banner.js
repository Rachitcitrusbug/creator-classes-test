import React from 'react';
import PropTypes from 'prop-types';

function Banner(props) {
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
                        {' '}
                        {props.data.creator.first_name} {props.data.creator.last_name}
                      </h2>
                      <p>{props.data.creator.key_skill}</p>
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
                          <span className="text">(99)</span>
                        </div>
                      </div>
                    </div>

                    <div className="social-banner-div">
                      <ul className="social-list-ul">
                        <li>
                          {' '}
                          <a href="" className="link">
                            {' '}
                            <i className="fab fa-instagram"></i>{' '}
                          </a>{' '}
                        </li>
                        <li>
                          {' '}
                          <a href="" className="link">
                            {' '}
                            <i className="fab fa-youtube"></i>{' '}
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

Banner.propTypes = {
  data: PropTypes.object,
};
