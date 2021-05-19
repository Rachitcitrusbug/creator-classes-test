import React from 'react';
import { Link } from 'react-router-dom';
import OneToOne from '../../assets/images/latest/onotoone.png';

function OneToOneSessions() {
  const authToken = localStorage.getItem('token');

  return (
    <>
      <section className="block-banner-new-classes-section block-banner-classes-03">
        <div className="block-banner-new-classes-div">
          <div className="block-banner-classes-root">
            <div className="container">
              <div className="row align-items-center-row">
                <div className="col-lg-5 col-md-6 order-lg-2">
                  <div className="center-content-div">
                    <div className="center-content-row">
                      <h2>
                        {' '}
                        <span className="block">One To One </span>{' '}
                        <span className="block">Sessions</span>{' '}
                      </h2>
                      <div className="title-line-div">
                        <h4>Time to learn the new way</h4>
                      </div>

                      <div className="img-thumb-div d-none">
                        <div className="img-thumb-inner">
                          <img src={OneToOne} className="img-fluid img-responsive" alt="img" />
                        </div>
                      </div>

                      <div className="desc-div">
                        <p>
                          Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a
                          pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere
                          blandit.
                        </p>
                      </div>
                      <div className="button-group-div">
                        <Link
                          to={authToken ? '/user-home' : '/login'}
                          className="btn btn-primary-outline btn-primary-outline-big"
                        >
                          <span className="text">Book Now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7 col-md-6 order-lg-1">
                  <div className="img-thumb-div m-none">
                    <div className="img-thumb-inner">
                      <img src={OneToOne} className="img-fluid img-responsive" alt="img" />
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

export default OneToOneSessions;
